---
layout: page
title: "Israeli Apartheid Week (IAW) 2026"
description: "今年のイスラエル・アパルトヘイト・ウィーク（IAW）は3月21日から28日まで全世界で開催されます。国際法においてアパルトヘイトは人道に対する罪の一つとして位置づけられ、「一つの人種的集団がほかの人種的集団を抑圧・支配する制度化された体制が存在する中で、その体制を維持する意図をもって非人道的な行為を行うこと」とされています（ステファニー・クープ著『国際法からとらえるパレスチナQ＆A　イスラエルの犯罪を止めるために』より）。まさにイスラエルがパレスチナ人に対して行っていることであり、人権団体や識者からもイスラエルの政策はアパルトヘイトだと指摘されています。イスラエルのアパルトヘイトを世に知らせ、パレスチナ人の解放闘争を他の闘争と結びつけ、BDS運動への支持を拡大することを目的に出発したIAW。パレスチナ人に対するジェノサイド、違法な占領、入植者植民地主義を前に、原点となるこうした目的は重要さを増しています。また、「力こそが正義」という動きが世界を席巻しつつある今、あらゆる形態での抑圧、レイシズム、植民地主義、そしてアパルトヘイトに抵抗することは必要不可欠です。"
image: "https://afzjapan.com/assets/img/BDS_IAW_header.webp"
css: ["https://cdn.skypack.dev/ol/ol.css", "index.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "popup.css", "cinemadays2025.css"]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "map.iaw.js", "map.main.js", "ol-ext.js"]
lang: "ja"
---
<div class="imageContainer" style="padding-bottom: 0px; margin-bottom: 0px;">
  <img src="{{site.baseurl}}/assets/img/BDS_IAW_header.webp" style="width:100%; padding:0; margin:0;" alt="Israeli Apartheid Week (IAW) 2026">
</div>



<div class="cinemaday-heading">

<div class="cinemaday-heading-info">
  <h6><span class="afz-heading-small-colored">イスラエル・アパルトヘイト・ウィーク（IAW）</span></h6>
  <p>

今年のイスラエル・アパルトヘイト・ウィーク（IAW）は3月21日から28日まで全世界で開催されます。国際法においてアパルトヘイトは人道に対する罪の一つとして位置づけられ、「一つの人種的集団がほかの人種的集団を抑圧・支配する制度化された体制が存在する中で、その体制を維持する意図をもって非人道的な行為を行うこと」とされています（ステファニー・クープ著『国際法からとらえるパレスチナQ＆A　イスラエルの犯罪を止めるために』より）。<br><br>

まさにイスラエルがパレスチナ人に対して行っていることであり、人権団体や識者からもイスラエルの政策はアパルトヘイトだと指摘されています。イスラエルのアパルトヘイトを世に知らせ、パレスチナ人の解放闘争を他の闘争と結びつけ、BDS運動への支持を拡大することを目的に出発したIAW。パレスチナ人に対するジェノサイド、違法な占領、入植者植民地主義を前に、原点となるこうした目的は重要さを増しています。また、「力こそが正義」という動きが世界を席巻しつつある今、あらゆる形態での抑圧、レイシズム、植民地主義、そしてアパルトヘイトに抵抗することは必要不可欠です。<br><br>

21年前にトロント大学でのイベントから始まったIAW。今年は原点に立ち戻り、キャンパスを中心としたキャンペーンが呼びかけられています。BJB (BDS Japan Bulletin)、AFZ Japan推進チームもキャンペーンを企画中です。 詳細は追ってお知らせします。みなさま、ぜひ振るってご参加ください。<br><br>

BDS民族評議会による呼びかけ↓<br>
<a href="https://bdsmovement.net/iaw">https://bdsmovement.net/iaw</a>

</p>

</div>
</div>



<a id="locations" />
<div id="afz" style="height: 540px; margin-top: 0; padding-top: 0;"></div>
<div id="popup" class="ol-popup">
  <a href="#" id="popup-closer" class="ol-popup-closer"></a>
  <div id="popup-content"></div>
</div>

{% assign types = site.data.types %}
<ul id="legend">
  {% for type in types %}
  <li><a href="javascript:;" data-type="{{ type.type }}"><img src="{{site.baseurl}}/assets/icons/{{ type.type }}.png" height=20 width=20><span>{{ type.name }}</span></a></li>
  {% endfor %}
  <li><a href="javascript:;" data-type="" class="type-show-all" style="display:none;"><span>× 絞り込みを解除</span></a></li>
</ul>

<div>

<table class="afz-table table-bordered">
  <thead>
    <tr>
      <th>AFZ</th>

<th class="column-pref">
        <div class="contain-filter">
          <span>所在地</span>
          <span>
            <a class="pref-dropdown-trigger btn-flat" href="javascript:;" data-activates="pref-dropdown">
              <i class="material-icons">filter_list</i>
            </a>
            <ul id="pref-dropdown" class="dropdown-content">
              <li><a href="javascript:;" data-pref-id="">すべて表示</a></li>
              <li class="divider"></li>
              {% assign prefectures = site.data.prefectures %}
              {% for pref in prefectures %}
                {% if pref.id > 0 %}
                  <li><a href="javascript:;" data-pref-id="{{ pref.id }}">{{ pref.name }}</a></li>
                {% endif %}
              {% endfor %}
            </ul>
          </span>
        </div>
      </th>
      <th><img align='top' src='/assets/icons/wifi.png' width='20px' height='20px' /></th>
    </tr>
  </thead>
  <tbody id="AFZTable">

  {% assign pref = site.data.prefectures %}
  {% assign list = site.data.iaw2026 %}
  {% for iaw in list %}
  <tr data-pref="{{ iaw.pref }}" data-type="{{ types[iaw.type].type }}">
    <td style="vertical-align: bottom;"> {{iaw.name}} <img align='top' src='{{site.baseurl}}/assets/icons/{{ types[iaw.type].type }}.png' width='20px' height='20px' /> <a href="#map" onclick="popup({% increment index %});"><img align='top' src='/assets/icons/afz_map.png' width='20px' height='20px' /></a> <br>
    {% for tag in afz.tags %}
      <div class="chip outlined" style="vertical-align: middle; font-size: 10px; height: 24px; line-height:24px; margin-bottom:0px">{{ tag }}</div>
    {% endfor %}
    </td>

    <td style="word-break: keep-all;">{{ pref[iaw.pref].name }}</td>
    <td>
    {% for link in iaw.links %}
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
<div class="afz-table-fallback hidden">
  <div>
    No results..
  </div>
</div>
</div>

<script>
var types = {{ types | jsonify }};
var json = {{ list | jsonify }};
</script>
