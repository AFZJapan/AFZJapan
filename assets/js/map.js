const container = document.getElementById('popup');
const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');

/**
 * Create an overlay to anchor the popup to the map.
 */
const overlay = new ol.Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250,
    },
  },
});

/**
 * Add a click handler to hide the popup.
 * @return {boolean} Don't follow the href.
 */
closer.onclick = function() {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};



const attribution = new ol.control.Attribution({
  collapsible: true,
  setCollapsed: true
});

const map = new ol.Map({
  target: 'afz',
  controls: ol.control.defaults.defaults({attribution: false}).extend([attribution]),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM({
        url: 'https://tile.openstreetmap.jp/{z}/{x}/{y}.png'
      })
    })
  ],
  overlays: [overlay],
  view: new ol.View({ center: ol.proj.fromLonLat([135.939478, 35.152832]), zoom: 4.7 }),
});

// Interactions
map.getInteractions().forEach((interaction) => {
    if (interaction instanceof ol.interaction.DragPan || interaction instanceof ol.interaction.MouseWheelZoom) {
        interaction.setActive(false);
    }
});

// Strg+MouseWheel Zoom
map.addInteraction(new ol.interaction.MouseWheelZoom({ condition: e => e.originalEvent.ctrlKey }));

// desktop: normal; mobile: 2-finger pan to start
map.addInteraction(new ol.interaction.DragPan({
  condition: function(e) {
    return ol.events.condition.noModifierKeys(e) && (!/Mobi|Android/i.test(navigator.userAgent) || this.targetPointers.length === 2)
  }
}));

// the quick-changing holder of last touchmove y
let lastTouchY = null

const div = document.getElementById('afz')
const scrollerBlades = document.scrollingElement || document.documentElement

div.addEventListener('touchmove', function (e) {
  e.preventDefault()
  const touches = e.touches || e.changedTouches
  // on 1-finger-touchmove, scroll and take note of prev y
  if (touches.length === 1) {
    if (lastTouchY !== null) {
      const by = lastTouchY - touches[0].clientY
      scrollerBlades.scrollTop += by
    }
    lastTouchY = touches[0].clientY
  }
})

// on touchend, reset y
div.addEventListener('touchend', e => { lastTouchY = null })

// end interactions

// get data from json
fetch('/data/map.json')
    .then((response) => response.json())
    .then((json) => display(json));

// Popup
const features = [];
function display(json) {
const styles = {};

  for (var i = 0; i < json.length; i++) {
    const data =  json[i];

    console.log(data[0]); // TODO del
    const feature = new ol.Feature({
      geometry: new ol.geom.Point(
        ol.proj.fromLonLat([parseFloat(data[0]), parseFloat(data[1])])
      ),
      title: data[2],
      description: data[3],
    });
    features.push(feature);

    styles[data[2]] = new ol.style.Style({
      image: new ol.style.Icon({
        src: "assets/icons/" + data[2] + ".png",
        scale: 0.4,
        anchor: [0.5, 1]
      })
    });
  }

  const markers = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: features,
    }),
    style: function (feature) {
      return styles[feature.get("title")]; // TODO: icon, not title
    }
  });

  map.addLayer(markers);

  map.on('click', function (evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
      return feature;
    });
    if (feature) {
      const coordinates = feature.getGeometry().getCoordinates();
      content.innerHTML =
        // '<p>Title:</p><code>' + feature.get('title') + '</code><br>' +
        // TODO: icon, name, chip, website/sns
        '<code>' + feature.get('description') + '</code>'
      overlay.setPosition(coordinates);
    }
  });
}
