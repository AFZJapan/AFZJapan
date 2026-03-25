---
layout: new-page
title: "AFZ & Vegan"
css: ["https://cdn.skypack.dev/ol/ol.css", "index.css", "halal.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "popup.css", "top.css", "images.css", "linkpreview.css", "download.css"]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "map.base.js", "map.main.js", "ol-ext.js"]
lang: "en"
---
<div class="main-content">

  <div class="imageContainer">
    <img src="{{site.baseurl}}/assets/img/vegan.jpg" style="width:100%; max-width:640px">
  </div>

  <section class="section">
    <div class="main-content-inner">

<div class="page">

    <p><span class="c6 c12 c30">Vegan </span><span class="c6 c9">&</span><span class="c6 c12 c30"> AFZ</span></p>

<p class="c1"><span>did you know that israel uses Veganism to improve its image? It's called </span><span class="c6 c20">VEGANWASHING</span></p>

<p class="c1"><span>Israeli Veganwashing: strategic promotion of veganism by the state, in order to make Israel appear liberal and progressive and distract attention away from ongoing violations of Palestinian rights.</span></p>

<p class="c1"><span>Most of us know that israel's continuous bombing of Gaza, Lebanon, Syria, Iran and Yemen affects the environment, but it's not limited to that. israel also cuts thousands of olive trees, spray prohibited chemicals on farmland in Gaza to prevent then from farming.</span></p>

<img src="{{site.baseurl}}/assets/img/olive.jpg" style="width: 374px; padding: 10px; display: block; margin-left: auto; margin-right: auto;" class="enlarge" onclick="enlargeImg(this)" />

<p class="c1"><span>It also exports fruits and vegetables that are grown on illegal settlements. Many European countries have started to ban imports.</span></p>

<!-- p class="c1"><span>Israel steals and limits water to the Palestinians in the West Bank. Palestinians are forbidden from even collecting rain water.</span></p -->

<!-- many organizations, like peta has never said a word about it. -->

<!-- destroys solar panels -->



<div id="afz" style="height: 540px; width: 100%; margin-bottom:10px;"></div>
  <div id="popup" class="ol-popup">
    <a href="#" id="popup-closer" class="ol-popup-closer"></a>
    <div id="popup-content"></div>
  </div>

{% assign types = site.data.types %}
<ul id="legend">
  {% for type in types %}
  <li><a href="javascript:;" data-type="{{ type.type }}"><div class="badge badge-light"><img src="{{site.baseurl}}/assets/icons/{{ type.type }}.png" height=20 width=20><span style="margin-left: 5px;">{{ type.en }}</span></div></a></li>
  {% endfor %}
  <li><a onclick="filterAll();" data-type="" class="type-show-all" style="display:none;"><div class="badge badge-light"><span>✖︎ clear filter</span></div></a></li>
</ul>

{% assign pref = site.data.prefectures %}

<div class="tag-search" style="margin-bottom: 8px;">
  <input type="text" id="tag-search"
         placeholder="search by tag（ex: vegan, Halal, organic）"
         class="form-control"
         style="max-width: 360px;">
</div>

<table class="afz-table table-bordered" style="border:solid black 1px; border-radius:6px;">
  <thead>
    <tr>
      <th>Name</th>
      <th class="column-pref">
        <div class="contain-filter">
          Place
          <li class="dropdown d-inline">
            <a data-toggle="dropdown" class="pref-dropdown-trigger has-dropdown font-weight-600 dropdown-toggle" aria-expanded="false" href="javascript:;" data-activates="pref-dropdown"><span class="material-icons white-icon" style="color: white;">filter_list</span></a>
            <ul class="dropdown-menu pre-scrollable" style="height: auto; max-height: 280px; overflow: hidden; overflow-y: auto;" id="pref-dropdown">
              <li class="nav-item"><a href="javascript:;" data-pref-id="" class="nav-link">all</a></li>
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
  {% assign popup_index = 0 %}
  {% assign list = site.data.list %}

  {% assign vegan = list | where_exp: "item", "item.name == 'empty'" %}
  {% for afz in list %}
    {% for t in afz.tags %}
      {% if t.en == "Vegan" %}
        {% assign vegan = vegan | push: afz %}
      {% endif %}
    {% endfor %}
  {% endfor %}

  {% for afz in vegan %}

  {% capture row_tags %}{% for t in afz.tags %}{{ t.ja }} {{ t.en }} {% endfor %}{% endcapture %}
  <tr data-pref="{{ afz.pref }}" data-type="{{ types[afz.type].type }}" data-tags="{{ row_tags | downcase }}">
    <td> {% if afz.en != null %}{{ afz.en }}{% else %}{{ afz.name }}{% endif %} <img align='top' src='/assets/icons/{{ types[afz.type].type }}.png' width='20px' height='20px' /> {% if afz.c2025 %} <img align='top' src='/assets/icons/cinema_small.png' width='20px' height='20px' /> {% endif %} {% if afz.geo != nil %} <a href="#map" onclick="popup({% increment popup_index %});"><img align='top' src='/assets/icons/pin.png' width='20px' height='20px' /></a> {% endif %} <br>
    {% for t in afz.tags %}
      <div class="badge badge-light" style="  margin-top:10px">{{ t.en }}</div>
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



    <p class="c1"><span class="c13 c11 c6">1. To Vegans</span></p>
    <p class="c1"><span>Please support vegan AFZ places, encourage businesses to join AFZ. Reject veganwashing by places and brands that support Zionism.</span></p>

    <p class="c1"><span class="c13 c11 c6">2. To influencers</span></p>
    <p class="c1"><span>Please post about Vegan AFZs. your support is important in growing awareness and the community.</span></p>

    <p class="c1"><span class="c13 c11 c6">3. To business owners</span></p>
    <p class="c1"><span><a href="/en/register">Register</a> your business in AFZ. </span></p>

<p>
  <div class="responsive" style="max-width: 400px;">
    <div class="gallery">
      <a target="_blank" href="/assets/downloads/afzbug_01.png">
        <img src="/assets/downloads/afzbug_01.png" alt="afzbug_01" height="100px">
      </a>
      <div class="desc">Designed by: <a href="https://www.instagram.com/momoenarazaki/" target="_blank">Momoe Narazaki</a></div>
    </div>
  </div>
</p>

<div class="jekyll-linkpreview-wrapper">
  <div class="jekyll-linkpreview-wrapper-inner">
    <div class="jekyll-linkpreview-content">
      <div class="jekyll-linkpreview-body">
        <h2 class="jekyll-linkpreview-title">
          <a href="https://www.vegansforbds.com/veganwashing/" target="_blank" style="font-weight: 700;">Vegans for BDS</a>
        </h2>
        <div class="jekyll-linkpreview-description">Vegans for BDS | Palestinian animal rights activists. This site has a lot of info, please check out.</div>
      </div>
    </div>
  </div>
</div>

</div>

    </div>
  </section>
</div>

<script>
var types = {{ types | jsonify }};
var json = {{ vegan | jsonify }}.filter(geo);
function geo(j) { return j.geo != null }
</script>
