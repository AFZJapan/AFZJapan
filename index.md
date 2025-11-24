---
layout: page
image: "https://afzjapan.com/assets/img/afz.png"
css: ["https://cdn.skypack.dev/ol/ol.css", "index.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "popup.css"]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "map.base.js", "map.main.js", "ol-ext.js"]
lang: "ja"
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

{% assign types = site.data.types %}
<ul id="legend">
  {% for type in types %}
  <li><img src="{{site.baseurl}}/assets/icons/{{ type.type }}.png" height=20 width=20><span>{{ type.name }}</span></li>
  {% endfor %}
</ul>

<div>

<!-- div class="row no-gutters" style="float: right; padding: 0; margin: 0">
  <div class="col" style="padding: 0 0 0 10px; margin: 0">
    <input class="form-control" style="padding: 0 0 0 4px; margin: 0 0 8px" type="text" id="place" list="places" placeholder="場所でフィルター" onkeyup="filterWithDelay()">
    <datalist id="places">
      <option value="北海道">北海道</option>
      <option value="宮城県">宮城県</option>
      <option value="山形県">山形県</option>
      <option value="千葉県">千葉県</option>
      <option value="東京都">東京都</option>
      <option value="神奈川県">神奈川県</option>
      <option value="長野県">長野県</option>
      <option value="愛知県">愛知県</option>
      <option value="三重県">三重県</option>
      <option value="滋賀県">滋賀県</option>
      <option value="京都府">京都府</option>
      <option value="大阪府">大阪府</option>
      <option value="兵庫県">兵庫県</option>
      <option value="岡山県">岡山県</option>
      <option value="広島県">広島県</option>
      <option value="徳島県">徳島県</option>
      <option value="愛媛県">愛媛県</option>
      <option value="福岡県">福岡県</option>
      <option value="沖縄県">沖縄県</option>
    </datalist>
  </div>
  <div class="col" style="padding: 0px; margin: 0 6px 8px 12px;">
    <button type="button" class="btnic" style="padding: 6px 30px; margin: 0" name="button" onclick="filterByPlace()"><i class="fa fa-search"></i></button>
  </div>
</div -->

<table class="afz-table table-bordered">
 <thead>
   <tr>
     <th>名前</th>
     <th><img align='top' src='/assets/icons/location.png' width='20px' height='20px' /></th>
     <th><img align='top' src='/assets/icons/wifi.png' width='20px' height='20px' /></th>
   </tr>
 </thead>
 <tbody id="AFZTable">
  {% assign pref = site.data.prefectures %}
  {% assign list = site.data.list %}
  {% for afz in list %}

  <tr>
    <td style="vertical-align: bottom;">{{afz.name}} <img align='top' src='/assets/icons/{{ types[afz.type].type }}.png' width='20px' height='20px' /> {% if afz.c2025 %} <img align='top' src='/assets/icons/cinema_small.png' width='20px' height='20px' /> {% endif %} <br/>
    {% for tag in afz.tags %}
      <div class="chip outlined" style="vertical-align: middle; font-size: 10px; height: 24px; line-height:24px; margin-bottom:0px">{{ tag }}</div>
    {% endfor %}
    </td>
    <td>{{ pref[afz.pref].name }}</td>
    <td>
    {% for link in afz.links %}
      {% if link[0] == "twitter" %}
        <a href='https://x.com/{{ link[1] }}' target='_blank'><img align='top' src='/assets/icons/twitter.png' width='20px' height='20px'></a>
      {% elsif link[0] == "insta" %}
        <a href='https://www.instagram.com/{{ link[1] }}/' target='_blank'><img align='top' src='/assets/icons/instagram.png' width='20px' height='20px'></a>
      {% elsif link[0] == "insta2" %}
        <a href='https://www.instagram.com/{{ link[1] }}/' target='_blank'><img align='top' src='/assets/icons/instagram.png' width='20px' height='20px'></a>
      {% elsif link[0] == "fb" %}
        <a href='{{ link[1] }}' target='_blank'><img align='top' src='/assets/icons/facebook.png' width='20px' height='20px'></a>
      {% else %}
        <a href='{{ link[1] }}' target='_blank'><img align='top' src='/assets/icons/website.png' width='20px' height='20px'></a>
      {% endif %}
    {% endfor %}
    </td>
  </tr>

  {% endfor %}

 </tbody>
</table>

<script>
var types = {{ types | jsonify }};
var json = {{ list | jsonify }}.filter(geo);
function geo(j) { return j.geo != null }
</script>

</div>
