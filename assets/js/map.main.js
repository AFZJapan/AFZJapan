class NearbyMapControl extends ol.control.Control {
  constructor() {
    const button = document.createElement('button');
    button.innerHTML = '<img src="/assets/img/nearby_bk.png" height=16 width=16 />';
    const element = document.createElement('div');
    element.className = 'nearby-map ol-unselectable ol-control';
    element.appendChild(button);
    super({
      element: element
    });
    button.addEventListener('click', function(){ window.open('/nearby', '_blank').focus(); }, false);
  }
}

map.addControl(new NearbyMapControl());

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
