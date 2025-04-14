epsg4326 = new OpenLayers.Projection("EPSG:4326")

map = new OpenLayers.Map("afz");
map.addLayer(new OpenLayers.Layer.OSM("AFZ",
    ["https://tile.openstreetmap.jp/${z}/${x}/${y}.png"], {
        attribution: "&copy; <a href='https://www.openstreetmap.org/'>AFZ日本</a> ",
        "tileOptions": { "crossOriginKeyword": null }
    }));

map.addControls([
    new OpenLayers.Control.LayerSwitcher(),
    new OpenLayers.Control.Permalink({ anchor: true })
]);

projectTo = map.getProjectionObject();
var lonLat = new OpenLayers.LonLat(139.839478, 35.652832).transform(epsg4326, projectTo);
var zoom = 5;
if (!map.getCenter()) {
    map.setCenter(lonLat, zoom);
}

// point-definitions
var markers = [
    [135.78231488193407, 35.039196850218715, 'お店・地元企業', 'shop'], // お店 6
    [134.74649203721995, 34.336122136273445, 'お店・地元企業', 'shop'], // お店 7
    [139.5283068200659, 35.70170448084507, 'お店・地元企業', 'shop'], // お店 8
    [139.73252432225615, 35.70422686480873, '飲食店', 'cafe'], // 飲食店 9
    [139.64859456870067, 35.70543004185311, '飲食店', 'cafe'], // 飲食店 10
    [132.7155055110331, 33.86380191240722, 'お店・地元企業', 'shop'], // お店 12
    [139.74590332445408, 35.73898748822561, '飲食店', 'cafe'], // 飲食店 3
    [141.31954732309313, 43.04903947510028, 'ソーシャル・社交の場', 'social'], // 合同会社エクレシア
    [139.64632521047002, 35.70674622831693, 'ソーシャル・社交の場', 'social'], // NamNam
];

var layerName = [markers[0][2]];
var styleArray = [new OpenLayers.StyleMap({ externalGraphic: 'assets/icons/' + [markers[0][3]] + '.png', graphicWidth: 24, graphicHeight: 24, graphicYOffset: -24, title: [markers[0][2]] })];
var vectorLayer = [new OpenLayers.Layer.Vector(layerName[0], { styleMap: styleArray[0] })];

var j = 0;
for (var i = 1; i < markers.length; i++) {
    if (!layerName.includes(markers[i][2])) {
        j++;
        layerName.push(markers[i][2]);
        styleArray.push(new OpenLayers.StyleMap({ externalGraphic: 'assets/icons/' + [markers[i][3]] + '.png', graphicWidth: 24, graphicHeight: 24, graphicYOffset: -24, title: '' + [markers[j][2]] }));
        vectorLayer.push(new OpenLayers.Layer.Vector(layerName[j], { styleMap: styleArray[j] }));
    }
}

// Loop through the markers array
for (var i = 0; i < markers.length; i++) {
    var lon = markers[i][0];
    var lat = markers[i][1];
    var feature = new OpenLayers.Feature.Vector(
        new OpenLayers.Geometry.Point(lon, lat).transform(epsg4326, projectTo),
            { description: markers[i][2] }
            // see http://dev.openlayers.org/docs/files/OpenLayers/Feature/Vector-js.html#OpenLayers.Feature.Vector.Constants for more options
    );
    vectorLayer[layerName.indexOf(markers[i][2])].addFeatures(feature);
}

for (var i = 0; i < layerName.length; i++) {
    map.addLayer(vectorLayer[i]);
}
