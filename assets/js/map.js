epsg4326 = new OpenLayers.Projection("EPSG:4326")
var options = {
        projection: new OpenLayers.Projection("EPSG:900913"),
        displayProjection: epsg4326,
        units: "m",
        numZoomLevels: 19,
        maxResolution: 156543.0339,
        maxExtent: new OpenLayers.Bounds(-0.13011, -0.13011, 51.51039, 51.51039)
    };

map = new OpenLayers.Map("afz", options);
map.addLayer(new OpenLayers.Layer.OSM("AFZ",
    ["https://tile.openstreetmap.jp/${z}/${x}/${y}.png"], {
        attribution: "&copy; <a href='https://www.openstreetmap.org/'>AFZ日本</a> ",
        "tileOptions": { "crossOriginKeyword": null }
    }));

map.addControls([
    new OpenLayers.Control.DragPan(),
    new OpenLayers.Control.ScaleLine(),
    new OpenLayers.Control.LayerSwitcher(),
    new OpenLayers.Control.Permalink({ anchor: true })
]);

projectTo = map.getProjectionObject();
var lonLat = new OpenLayers.LonLat(139.839478, 35.652832).transform(epsg4326, projectTo);
var zoom = 5;
if (!map.getCenter()) {
    map.setCenter(lonLat, zoom);
}

var iconSize = new OpenLayers.Size(24, 24);
var iconOffset = new OpenLayers.Pixel(-(iconSize.w / 2), -iconSize.h);
var zoom, center, currentPopup, map;
var layers = [];
var popupClass = OpenLayers.Class(OpenLayers.Popup.FramedCloud, {
    "autoSize": true,
    "minSize": new OpenLayers.Size(200, 50),
    "maxSize": new OpenLayers.Size(400, 300),
    "keepInMap": true
});
var bounds = new OpenLayers.Bounds();
var icons = [];
const categories = {
    social: "ソーシャル・社交の場",
    cultural: "文化的な場所",
    cafe: "飲食店",
    shop: "お店・地元企業",
    public: "公的機関"
};
var i = 0;
for (var key in categories) {
    icons.push(new OpenLayers.Icon("assets/icons/" + key + ".png", iconSize, iconOffset));
    layers.push(new OpenLayers.Layer.Markers(categories[key]));
    map.addLayer(layers[i]);
    i++;
}

function addMarker(lon, lat, icon, info) {
    var pt = new OpenLayers.LonLat(lon, lat).transform(epsg4326, projectTo);
    bounds.extend(pt);
    var index = Object.keys(categories).indexOf(icon);
    var feature = new OpenLayers.Feature(layers[index], pt);
    feature.closeBox = true;
    feature.popupClass = popupClass;
    feature.data.popupContentHTML = info;
    feature.data.overflow = "auto";
    var marker = new OpenLayers.Marker(pt, icons[index].clone());
    var markerClick = function(evt) {
        if (currentPopup != null && currentPopup.visible()) {
            currentPopup.hide();
        }
        if (this.popup == null) {
            this.popup = this.createPopup(this.closeBox);
            map.addPopup(this.popup);
            this.popup.show();
        } else {
            this.popup.toggle();
        }
        currentPopup = this.popup;
        OpenLayers.Event.stop(evt);
    };
    marker.events.register("mousedown", feature, markerClick);
    layers[index].addMarker(marker);
}

fetch('/data/map.json')
    .then((response) => response.json())
    .then((json) => display(json));

function display(json) {
    for (var i = 0; i < json.length; i++) {
        addMarker(json[i][0], json[i][1], json[i][2], json[i][3]);
    }
}
