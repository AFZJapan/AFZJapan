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

/**
 * Attribution
 */
const attribution = new ol.control.Attribution({
  collapsible: true,
  setCollapsed: true
});

var tileUrl = "https://tile.openstreetmap.jp/{z}/{x}/{y}.png";
if (window.location.pathname === "/en") {
  tileUrl = "https://tile.openstreetmap.jp/styles/osm-bright/{z}/{x}/{y}.png";
}

const map = new ol.Map({
  target: 'afz',
  controls: ol.control.defaults.defaults({attribution: false}).extend([attribution]),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM({
        url: tileUrl
      })
    })
  ],
  overlays: [overlay],
  view: new ol.View({ center: ol.proj.fromLonLat([135.939478, 35.152832]), zoom: 4.7 }),
});

// Pins
const features = [];
const styles = {};

function addFeatureAt(data) {
  const r = map.getView().getResolution() * 10;
  const f = new ol.Feature({
    geometry: new ol.geom.Point(
      ol.proj.fromLonLat([data.geo.lon, data.geo.lat])
    ),
    title: data.name,
    description: (window.location.pathname === "/en" ? (data.en ? data.en : data.name) : (data.name_on_map ? data.name_on_map : data.name)),
    links: data.links,
    id: data.type
  });
  vector.getSource().addFeature(f);
  vector.animateFeature (f, [
    new ol.featureAnimation["Show"] ({
      speed: Number(0.5),
      duration: Number(1000-0.5*50),
      side: $("#side").prop('checked')
    })
  ]);
}

function display(json) {
  for (var i = 0; i < json.length; i++) {
    const data =  json[i];

    styles[data.name] = [
      //new ol.style.Style({
      //  image: new ol.style.Shadow({
      //    radius: 15,
      //  }),
      //  stroke: new ol.style.Stroke({
      //    color: [0,0,0,0.3],
      //    width: 2
      //  }),
      //  fill: new ol.style.Fill({
      //    color: [0,0,0,0.3]
      //    }),
      //  zIndex: -1
      //}),
      new ol.style.Style({
        image: new ol.style.Icon({
          src: "assets/icons/" + types[data.type].type + ".png",
          scale: 0.4,
          anchor: [0.5, 1]
        })
      })
    ];

    setTimeout(function() {
      addFeatureAt(data)
    }, 100*i);
  }

  // Popup
  map.on('click', function (evt) {
    const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
      return feature;
    });
    if (feature) {
      const coordinates = feature.getGeometry().getCoordinates();
      content.innerHTML = '<code>' + feature.get('description') + '</code>'
      addlinks(feature.get('links'));
      overlay.setPosition(coordinates);
    }
  });
}

const vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    features: features,
  }),
  style: function (feature) {
     return styles[feature.get("title")]; // TODO: icon, not title
  }
});

map.addLayer(vector);

display(json);

function popup(index) {
  const element = document.getElementById("afz");
  const y = element.getBoundingClientRect().top + window.scrollY;
  scrollTo({ top: y, behavior: 'smooth' });
  const pos = ol.proj.fromLonLat([json[index].geo.lon, json[index].geo.lat]);
  content.innerHTML = '<code>' + json[index].name + '</code>'; // make popup
  addlinks(json[index].links);
  overlay.setPosition(pos);
}

function addlinks(links) {
  if (links) {
    rows = ``;
    if (links.web) {
      rows += `<a href="` + links.web + `" target="_blank"><img align='top' src='/assets/icons/website.png' width='20px' height='20px' /></a> `;
    }
    if (links.insta) {
      rows += `<a href="https://www.instagram.com/` + links.insta + `" target="_blank"><img align='top' src='/assets/icons/instagram.png' width='20px' height='20px' /></a> `;
    }
    if (links.twitter) {
      rows += `<a href="https://x.com/` + links.twitter + `" target="_blank"><img align='top' src='/assets/icons/twitter.png' width='20px' height='20px' /></a> `;
    }
    content.innerHTML += '<br>' + '<code>' + rows + '</code>';
  }
}
