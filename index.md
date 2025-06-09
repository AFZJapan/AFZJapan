---
layout: page
css: ["https://cdn.skypack.dev/ol/ol.css", "index.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "x.css", "popup.css"]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "https://unpkg.com/ol-layerswitcher@4.1.1/dist/ol-layerswitcher.js",  "list.js", "https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@main/dist/en/v7.0.0/legacy/ol.js", "map.js"]
---
<script src="//openlayers.org/api/2.13.1/OpenLayers.js"></script>
<script>window.OpenLayers || document.write('<script src="{{site.baseurl}}/assets/js/OpenLayers.js">\x3C/script>')</script>

<div class="imageContainer" style="background-image:url('{{site.baseurl}}/assets/img/top_bg.png'); padding: 0px; margin: 0px;">
  <img src="{{site.baseurl}}/assets/img/top_banner.png" alt="top banner" style="width:100%; padding: 0px; ">
</div>

<div class="row" style="padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px; background-color:#a32a34">

<div style="color: #fff">
<img src="/assets/img/logo.jpg" style="float: right; width: 120px; margin-left: 20px;" />
<span style="font-weight: 700" >アパルトヘイトフリーゾーン (AFZ) に登録しましょう！</span><br/>AFZキャンペーンは、世界各地のお店や文化施設、自治体などの「場所」がパレスチナの人々と連帯し、イスラエルによるアパルトヘイト（人種隔離）政策に反対していることを宣言するキャンペーンです。世界中でたくさんの学校やビジネスがAFZに名乗りをあげています。<br>
<a href="https://afzjapan.com/register" style="color: #fff">▶︎ 登録はこちらから！</a>
</div>

</div>

<div id="afz" style="height: 540px;"></div>
<div id="popup" class="ol-popup">
  <a href="#" id="popup-closer" class="ol-popup-closer"></a>
  <div id="popup-content"></div>
</div>

<ul id="legend">
  <li><img src="{{site.baseurl}}/assets/icons/social.png" height=20 width=20><span>ソーシャル・社交の場</span></li>
  <li><img src="{{site.baseurl}}/assets/icons/cultural.png" height=20 width=20><span>文化的な場所</span></li>
  <li><img src="{{site.baseurl}}/assets/icons/cafe.png" height=20 width=20><span>飲食店</span></li>
  <li><img src="{{site.baseurl}}/assets/icons/shop.png" height=20 width=20><span>お店・地元企業</span></li>
  <li><img src="{{site.baseurl}}/assets/icons/place.png" height=20 width=20><span>公的機関</span></li>
</ul>

<div>

<div class="row no-gutters" style="float: right;">
  <div class="col">
    <input class="form-control" type="text" id="place" list="places" placeholder="場所でフィルター" onkeyup="filterWithDelay()">
    <datalist id="places">
      <option value="東京都">東京都</option>
      <option value="京都府">京都府</option>
      <option value="兵庫県">兵庫県</option>
      <option value="愛媛県">愛媛県</option>
    </datalist>
  </div>
  <div class="col">
    <button type="button" class="btnic" name="button" onclick="filterByPlace()"><i class="fa fa-search"></i></button>
  </div>
</div>

<table class="table table-bordered">
 <thead>
   <tr>
     <th>名前</th>
     <th><img align='top' src='/assets/icons/location.png' width='20px' height='20px' /></th>
     <th><img align='top' src='/assets/icons/wifi.png' width='20px' height='20px' /></th>
   </tr>
 </thead>
 <tbody id="AFZTable">

 </tbody>
</table>

</div>
