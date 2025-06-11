---
layout: page
css: ["https://cdn.skypack.dev/ol/ol.css", "index.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "x.css", "popup.css"]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "https://unpkg.com/ol-layerswitcher@4.1.1/dist/ol-layerswitcher.js", "list.js", "https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@main/dist/en/v7.0.0/legacy/ol.js", "map.js"]
---

<table style="table-layout: fixed; padding: 0; margin:0; width: 100%; min-width: 360px; height: 80px; max-height:80px; background-image:url('/assets/img/top_bg.png')">
  <tr style="padding: 0; margin:0">
    <td class="example" style="padding: 0; margin:0; max-height:80px;">
      <img src="/assets/img/top-image-right.png" style="float: right; height: 80px; margin-left: 0px;" class="image-mobile" />
      <img src="/assets/img/top-image-right.png" style="float: right; height: 120px; margin-left: 0px;" class="image-pc" />
      <img src="/assets/img/top-image-left.png" style=" height: 80px; margin-left: 50px;" class="image-mobile"/>
      <img src="/assets/img/top-image-left.png" style=" height: 120px; margin-top: 0px; margin-left: 20px;" class="image-pc"/>
    </td>
  </tr>
</table>

<div class="row" style="padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px; background-color:#a32a34">

<div style="color: #fff; text-align: justify">
<img src="/assets/img/logo.jpg" style="float: right; width: 120px; margin-left: 10px;" />
AFZキャンペーンは、世界各地のお店や文化施設、自治体などの「場所」がパレスチナの人々と連帯し、イスラエルによるアパルトヘイト（人種隔離）政策に反対していることを宣言するキャンペーンです。世界中でたくさんの学校やビジネスがAFZに名乗りをあげています。<br><br>
<a href="https://afzjapan.com/register" style="color: #fff">▶︎ アパルトヘイトフリーゾーン (AFZ) に登録しましょう！</a>
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

<table class="afz-table table-bordered">
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
