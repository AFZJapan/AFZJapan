---
layout: page
css: ["index.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "x.css"]
js: ["map.js", "list.js"]
---
<script src="//openlayers.org/api/2.13.1/OpenLayers.js"></script>
<script>window.OpenLayers || document.write('<script src="{{site.baseurl}}/assets/js/OpenLayers.js">\x3C/script>')</script>

<div class="row">

<h4>アパルトヘイト・フリー・ゾーン（AFZ）とは？</h4>
アパルトヘイト・フリー・ゾーン（AFZ）キャンペーンへのご参加のお願い<br /><br />

このキャンペーンは、世界各地のお店や文化施設、自治体などの空間がパレスチナの人々と連帯し、イスラエルによるアパルトヘイト（人種隔離）政策に反対であることを宣言するキャンペーンです。ヨーロッパやラテンアメリカを中心に、世界中でたくさんの学校やビジネスがアパルトヘイト・フリー・ゾーン（AFZ）に名乗りをあげています。

</div>

<div id="afz" style="height: 600px;"></div>

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
