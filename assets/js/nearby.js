navigator.permissions.query({ name: "geolocation" }).then((result) => {

  const onLocationFetchSuccess = (position) => {

    if (position.coords.longitude > 122 &&
        position.coords.longitude < 154 &&
        position.coords.latitude > 20 &&
        position.coords.latitude < 46) {
      addControl();
      centerNearbyMap(position);
      zoom(0);
    } else {
      console.log("position may be outside Japan");
    }
  };

  const onLocationFetchFailure = (error = {}) => {
    // Error code 1 corresponds to user denying/blocking the location permission
    if (error.code === 1) {
      console.log("error: user denied location permission");
    }
  };

  navigator.geolocation.getCurrentPosition(onLocationFetchSuccess, onLocationFetchFailure);

  if (result.state === 'denied') {
    onLocationFetchFailure();
  }

  // works for Chrome
  result.onchange = function() {
    if (result.state === 'denied') {
      onLocationFetchFailure();
    }
  }

});

const source = new ol.source.Vector();
const layer = new ol.layer.Vector({
  source: source,
});
map.addLayer(layer);

function centerNearbyMap(pos) {
  const coords = [pos.coords.longitude, pos.coords.latitude];
  const accuracy = new ol.geom.Polygon(coords, pos.coords.accuracy);
  source.clear(true);
  source.addFeatures([
    new ol.Feature(
      accuracy.transform('EPSG:4326', map.getView().getProjection()),
    ),
    new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat(coords))),
  ]);
}

function addControl() {
  const locate = document.createElement('div');
  locate.className = 'ol-control ol-unselectable locate';
  locate.innerHTML = '<button title="位置を特定する">◎</button>';
  locate.addEventListener('click', function () {
    zoom(500);
  });

  map.addControl(
    new ol.control.Control({
      element: locate,
    }),
  );
}

const zoomedIn = map.on('loadend', function () {
  setTimeout(function () {
    zoom(500);
    ol.Observable.unByKey(zoomedIn);
  }, 500);
});

function zoom(d) {
  if (!source.isEmpty()) {
    map.getView().fit(source.getExtent(), {
      maxZoom: 10,
      duration: d,
    });
  }
}
