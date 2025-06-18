---
layout: page
title: "Apartheid Free Zones (AFZ) in Japan"
description: "The global Apartheid Free Zones (AFZ) campaign encourages spaces such as shops, cultural facilities, and local governments around the world to declare their solidarity with the Palestinian people and their rejection of Israel's apartheid policy. This site is dedicated to localizing and promoting AFZ in Japan."
image: "https://afzjapan.com/assets/img/afz_scr_en.png"
css: ["https://cdn.skypack.dev/ol/ol.css", "index.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "popup.css"]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "map.base.js", "map.main.js", "list.js"]
lang: "en"
---

<table style="table-layout: fixed; padding: 0; margin:0; width: 100%; min-width: 360px; height: 80px; max-height:80px; background-image:url('/assets/img/top_bg.png')">
  <tr style="padding: 0; margin:0">
    <td class="example" style="padding: 0; margin:0; max-height:80px;">
      <img src="/assets/img/top-image-right.png" style="float: right; height: 80px; margin-left: 0px;" class="image-mobile" />
      <img src="/assets/img/top-image-right.png" style="float: right; height: 120px; margin-left: 0px;" class="image-pc" />
      <img src="/assets/img/top-image-left-en.png" style=" height: 80px; margin-left: 50px;" class="image-mobile"/>
      <img src="/assets/img/top-image-left-en.png" style=" height: 120px; margin-top: 0px; margin-left: 20px;" class="image-pc"/>
    </td>
  </tr>
</table>

<div class="row" style="padding-left: 10px; padding-right: 10px; padding-top: 10px; padding-bottom: 10px; background-color:#a32a34">

<div style="color: #fff; text-align: justify">
<img src="/assets/img/logo.jpg" style="float: right; width: 120px; margin-left: 10px;" />
The global Apartheid Free Zone (AFZ) campaign encourages spaces such as shops, cultural facilities, and local governments around the world to declare their solidarity with the Palestinian people and their rejection of Israel's apartheid policy. Many schools and businesses around the world have already declared themselves as AFZ. This site is dedicated to localizing and promoting AFZ in Japan. For infomation in English, please check the <a href="https://www.bdsmovement.net/apartheid-free-zones" style="color: #fff">BDS Movement's AFZ website</a>.<br><br>
<a href="https://afzjapan.com/register" style="color: #fff">▶︎ Join the AFZ Japan community！(form is available in English)</a>
</div>

</div>

<div id="afz" style="height: 540px;"></div>
<div id="popup" class="ol-popup">
  <a href="#" id="popup-closer" class="ol-popup-closer"></a>
  <div id="popup-content"></div>
</div>

<ul id="legend">
  <li><img src="{{site.baseurl}}/assets/icons/social.png" height=20 width=20><span>social</span></li>
  <li><img src="{{site.baseurl}}/assets/icons/cultural.png" height=20 width=20><span>cultural</span></li>
  <li><img src="{{site.baseurl}}/assets/icons/cafe.png" height=20 width=20><span>cafe</span></li>
  <li><img src="{{site.baseurl}}/assets/icons/shop.png" height=20 width=20><span>shop</span></li>
  <li><img src="{{site.baseurl}}/assets/icons/place.png" height=20 width=20><span>public space</span></li>
</ul>

<div>

<div class="row no-gutters" style="float: right; padding: 0; margin: 0">
  <div class="col" style="padding: 0 0 0 10px; margin: 0">
    <input class="form-control" style="padding: 0 0 0 4px; margin: 0 0 8px" type="text" id="place" list="places" placeholder="場所でフィルター" onkeyup="filterWithDelay()">
    <datalist id="places">
      <option value="北海道">北海道</option>
      <option value="東京都">東京都</option>
      <option value="神奈川県">神奈川県</option>
      <option value="長野県">長野県</option>
      <option value="愛知県">愛知県</option>
      <option value="京都府">京都府</option>
      <option value="大阪市">大阪市</option>
      <option value="兵庫県">兵庫県</option>
      <option value="広島県">広島県</option>
      <option value="愛媛県">愛媛県</option>
      <option value="沖縄県">沖縄県</option>
    </datalist>
  </div>
  <div class="col" style="padding: 0px; margin: 0 6px 8px 12px;">
    <button type="button" class="btnic" style="padding: 6px 30px; margin: 0" name="button" onclick="filterByPlace()"><i class="fa fa-search"></i></button>
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
