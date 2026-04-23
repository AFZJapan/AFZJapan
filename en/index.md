---
layout: dark-page
title: "Apartheid Free Zones (AFZ) in Japan"
description: "The global Apartheid Free Zones (AFZ) campaign encourages spaces such as shops, cultural facilities, and local governments around the world to declare their solidarity with the Palestinian people and their rejection of Israel's apartheid policy. This site is dedicated to localizing and promoting AFZ in Japan."
image: "https://afzjapan.com/assets/img/afz_scr_en.png"
css: ["https://cdn.skypack.dev/ol/ol.css", "index.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "popup.css"]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "map.base.js", "map.main.js", "ol-ext.js"]
lang: "en"
---

<div class="main-content">

<div class="main-content-inner">
The Apartheid Free Zone (AFZ) campaign encourages spaces such as shops, cultural facilities, and local governments around the world to declare their solidarity with the Palestinian people and reject Israel's apartheid policies, through the BDS movement. Thousands of schools and businesses around the world have already declared themselves as AFZ. This site is dedicated to localizing and promoting AFZ in Japan. We now have more than 250 AFZs!
</div>

<div id="afz" style="height: 540px; margin-bottom:10px;"></div>
<div id="popup" class="ol-popup">
  <a href="#" id="popup-closer" class="ol-popup-closer"></a>
  <div id="popup-content"></div>
</div>

{% assign types = site.data.types %}
<ul id="legend">
  {% for type in types %}
  <li><a href="javascript:;" data-type="{{ type.type }}"><div class="badge badge-light"><img src="{{site.baseurl}}/assets/icons/{{ type.type }}.png" height=20 width=20><span style="margin-left: 5px;">{{ type.en }}</span></div></a></li>
  {% endfor %}
  <li><a onclick="filterAll();" data-type="" class="type-show-all" style="display:none;"><div class="badge badge-light"><span>✖︎ 絞り込みを解除</span></div></a></li>
</ul>

<div>

{% assign pref = site.data.prefectures %}

<table class="afz-table">
  <thead>
    <tr>
      <th>name</th>
      <th class="column-pref">
        <div class="contain-filter">
          place
          <li class="dropdown d-inline">
            <a data-toggle="dropdown" class="pref-dropdown-trigger has-dropdown font-weight-600 dropdown-toggle" aria-expanded="false" href="javascript:;" data-activates="pref-dropdown"><span class="material-icons white-icon" style="color: white;">filter_list</span></a>
            <ul class="dropdown-menu pre-scrollable" style="height: auto; max-height: 280px; overflow: hidden; overflow-y: auto;" id="pref-dropdown">
              <li class="nav-item"><a href="javascript:;" data-pref-id="" class="nav-link">show all</a></li>
              <li class="nav-item"><hr class="m-0"></li>
              {% for p in pref %}
                {% if p.id > 0 %}
              <li class="nav-item"><a href="javascript:;" data-pref-id="{{ p.id }}" class="nav-link">{{ p.en }}</a></li>
                {% endif %}
              {% endfor %}
            </ul>
          </li>
        </div>
      </th>
      <th><i class="fas fa-rss"></i></th>
    </tr>
  </thead>
  <tbody id="AFZTable">
  {% assign x = 0 %}
  {% assign list = site.data.list %}
  {% for afz in list %}

  <tr data-pref="{{ afz.pref }}" data-type="{{ types[afz.type].type }}">
    <td> {% if afz.en != null %}{{ afz.en }}{% else %}{{ afz.name }}{% endif %} <img align='top' src='/assets/icons/{{ types[afz.type].type }}.png' width='20px' height='20px' /> {% if afz.c2025 %} <img align='top' src='/assets/icons/cinema_small.png' width='20px' height='20px' /> {% endif %} {% if afz.geo != nil %} <a href="#map" onclick="popup({% increment x %});"><img align='top' src='/assets/icons/pin.png' width='20px' height='20px' /></a> {% endif %} <br>
    {% for tag in afz.tags %}

      <div class="badge badge-light" style="  margin-top:10px">{{ tag }}</div>
    {% endfor %}
    </td>
    <td>{{ pref[afz.pref].en }}</td>
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
<div class="afz-table-fallback hidden">
  <div>
    No results..
  </div>
</div>

<script>
var types = {{ types | jsonify }};
var json = {{ list | jsonify }}.filter(geo);
function geo(j) { return j.geo != null }
</script>

</div>

</div>
