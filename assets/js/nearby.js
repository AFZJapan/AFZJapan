const source = new ol.source.Vector();
const layer = new ol.layer.Vector({
  source: source,
});
map.addLayer(layer);

navigator.geolocation.watchPosition(
  function (pos) {
    const coords = [pos.coords.longitude, pos.coords.latitude];
    const accuracy = new ol.geom.Polygon(coords, pos.coords.accuracy);
    source.clear(true);
    source.addFeatures([
      new ol.Feature(
        accuracy.transform('EPSG:4326', map.getView().getProjection()),
      ),
      new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat(coords))),
    ]);
  },
  function (error) {
    alert(`ERROR: ${error.message}`);
  },
  {
    enableHighAccuracy: true,
  },
);

const locate = document.createElement('div');
locate.className = 'ol-control ol-unselectable locate';
locate.innerHTML = '<button title="位置を特定する">◎</button>';
locate.addEventListener('click', function () {
  zoom();
});

map.addControl(
  new ol.control.Control({
    element: locate,
  }),
);

map.on('loadend', function () {
  setTimeout(function () {
    zoom();
  }, 500);
});

function zoom() {
  if (!source.isEmpty()) {
    map.getView().fit(source.getExtent(), {
      maxZoom: 10,
      duration: 500,
    });
  }
}
