---
layout: page
image: "https://afzjapan.com/assets/img/afz.png"
css: ["https://cdn.skypack.dev/ol/ol.css", "index.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "popup.css"]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "map.cinema.js", "map.main.js", "list.cinema.js", "ol-ext.js"]
lang: "ja"
---
<div class="imageContainer" style="padding-bottom: 0px; margin-bottom: 0px;">
  <img src="{{site.baseurl}}/assets/img/cinema_bg.png" style="width:100%; padding:0; margin:0;">
</div>

<div id="afz" style="height: 540px; margin-top: 0; padding-top: 0;"></div>
<div id="popup" class="ol-popup">
  <a href="#" id="popup-closer" class="ol-popup-closer"></a>
  <div id="popup-content"></div>
</div>

<div>

<table class="cinema-table table-bordered">
 <thead>
   <tr>
     <th>名前</th>
   </tr>
 </thead>
 <tbody id="CinemaTable">

 </tbody>
</table>

</div>
