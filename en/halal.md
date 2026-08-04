---
layout: new-page
title: "AFZ & Halal"
image: "https://afzjapan.com/assets/img/afz.png"
css: ["https://cdn.skypack.dev/ol/ol.css", "index.css", "halal.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "popup.css", "top.css", "images.css"]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "map.base.js", "map.main.js", "ol-ext.js"]
lang: "en"
---
<div class="main-content">

  <div class="imageContainer">
    <img src="{{site.baseurl}}/assets/img/AlAqsa.webp" style="width:100%; max-width:640px">
  </div>

  <section class="section">
    <div class="main-content-inner">

<div class="page">

    <p><span class="c6 c12 c30">Halal </span><span class="c6 c9">&</span><span class="c6 c12 c30"> AFZ</span></p>
    <p class="c1"><span class="c0">What&#39;s happening in Gaza has to be stopped!</span></p>
    <p class="c1"><span>If not by hands, then by words and money. (we mean </span><span class="c6 c20">BOYCOTT</span><span>&nbsp;not asking for your money. </span><span class="c6">Please stop giving it to the genocide!</span><span class="c0">)</span></p>
    <p class="c1"><span class="c0">There&rsquo;s much more that can be done than just praying or donating.</span></p>
    <p class="c1"><span class="c6 c17">BOYCOTTS are the absolute minimum!</span></p>
    <p class="c1"><span class="c0">You also have to boldly show that you are boycotting. </span></p>
    <p class="c1"><span>One way to show this is by </span><a href="/en/register">joining AFZ</a><span class="c0">.</span></p>

    <table class="c18">
      <tr class="c15">
        <td class="c19" colspan="1" rowspan="1">
          <p class="c1"><span class="c13 c25 c6">What is AFZ?</span></p>
          <p class="c1"><span>The global </span><span class="c6 c12">Apartheid Free Zone (AFZ)</span><span>&nbsp;campaign encourages spaces such as restaurants, shops, cultural facilities around the world to declare their solidarity with the Palestinian people and their rejection of </span><span>israel&#39;s</span><span>&nbsp;apartheid policy. Thousands of schools and businesses around the world have already declared themselves as </span><span class="c6">AFZ</span><span>.</span></p>
        </td>
        <td class="c29" colspan="1" rowspan="1">
          <p class="c10"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; width: 170.00px; height: 170.00px;"><img src="/assets/img/AFZ_int_logo_bw_whitebg.png" style="width: 170.00px; height: 170.00px; margin-left: 0.00px; margin-top: 0.00px;"></span></p>
        </td>
      </tr>
    </table>

    <p class="c1"><span>We are in the process of making a list of places in Japan who have publicly shown support for &#127477;&#127480; Palestine and boycott of israeli products.</span></p>


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

  {% assign halal = list | where_exp: "item", "item.name == 'empty'" %}
  {% for afz in list %}
    {% for t in afz.tags %}
      {% if t.en == "Halal" %}
        {% assign halal = halal | push: afz %}
      {% endif %}
    {% endfor %}
  {% endfor %}

  {% for afz in halal %}

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

    <p class="c1"><span>To overcome the fear of backlash or not knowing enough, we must do it together and not hide our support. That&rsquo;s why you are invited to <a href="/en/register">join AFZ</a>.</span></p>

    <table class="c18">
      <tr class="c15">
        <td class="c8" colspan="1" rowspan="1">
          <p class="c4"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; width: 169.00px;"><img src="/assets/downloads/BDS_logo.png" style="width: 169.00px; margin-left: 0.00px; margin-top: 0.00px;"></span></p>
        </td>
        <td class="c22" colspan="1" rowspan="1">
          <p class="c1"><span>AFZ campagin is part of the </span><span class="c11 c6">BDS Movement</span><span class="c0">, which exerts international pressure against israel&#39;s occupation, genocide, and ethnic cleansing of the Palestinian people.</span></p>
          <p class="c1"><span>BDS has been hugely successful, forcing many companies to change their behavior in face of boycotts and public criticism.</span></p>
        </td>
      </tr>
    </table>

    <table class="c18">
      <tr class="c15">
        <td class="c14" colspan="1" rowspan="1">
          <p class="c1"><span>But a lot of people even in the Muslim communities are still unaware of the calls to </span><span class="c6">boycott</span><span class="c0">, others unsure about its power. If you are afraid of losing customers, you have to ask, is it worth it? Please show responsibility!</span></p>
        </td>
        <td class="c14" colspan="1" rowspan="1">
          <p class="c26"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; width: 240.50px;"><img src="/assets/halal/boycott_cocacola.png" style="width: 240.50px; margin-left: 0.00px; margin-top: 0.00px;"></span></p>
        </td>
      </tr>
    </table>

    <p class="c1"><span class="c0">There are so many genocide-free options in Japan; more than the western world. We can easily avoid companies that are on the boycott list.</span></p>
    <p class="c10"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; width: 374.15px;"><img src="/assets/img/BDS_targets_en.jpg" style="width: 374.15px; margin-left: 0.00px; margin-top: 0.00px;"></span></p>

    <p class="c1"><span class="c13 c11 c6">1. To Mosques and community leaders</span></p>
    <p class="c1"><span>We ask for co-operation from mosques and Imaams, in sharing more about the struggle of our brothers and sisters in &#127477;&#127480; Palestine, not only by praying and collecting donations, but also by </span><a href="/en/register">joining AFZ</a><span class="c0"> and sharing about <a href="/en/boycotts">boycott</a> campaigns.</span></p>

    <p class="c1"><span class="c13 c11 c6">2. To Halal business owners</span></p>
    <p class="c1"><span class="c0">Businesses are in a unique position. They influence buying decisions of the community. We call on Halal business owners (like restaurants &amp; shops) in Japan to become AFZ.</span></p>
    <p class="c1"><span class="c6">Don&#39;t sell</span><span class="c0">&nbsp;products that are made in israel, or do business with companies that support israel in any form.</span></p>
    <p class="c1"><span>Chances are, you&#39;re already not doing business with israel. Please check just to be sure, and <a href="/en/register">add your name on the list</a>. </span><span class="c24">&#9654;&#65038; </span><span class="c0">Registration is only a few clicks.</span></p>

    <p class="c1"><span class="c13 c11 c6">3. To Halal food / Muslim influencers</span></p>
    <p class="c1"><span class="c0">We ask anyone with a big platform to speak up for &#127477;&#127480; Palestine, connect with the Palestinians, raise awareness about not only what&rsquo;s happening in Gaza, but what activists are asking us to do. Things are changing because of the things you&rsquo;ve been doing, but it&rsquo;s very slow. We have to turn it up a notch.</span></p>
    <p class="c1"><span>You can</span><span class="c6">&nbsp;talk about AFZs</span><span class="c0">&nbsp;in Japan; promoting them would help this campaign. Please encourage places to become AFZ.</span></p>

    <p class="c1"><span class="c13 c11 c6">4. To Muslims in Japan</span></p>
    <p class="c1"><span>We ask you to continue </span><span class="c6">boycotting</span><span>&nbsp;all </span><span>israeli</span><span>&nbsp;products, and </span><span class="c6">encourage your local shops</span><span>&nbsp;to not shelve any </span><span>israeli</span><span class="c0">&nbsp;products. Please check out AFZs near you, support them whenever you can. Ask your favorite shops to become AFZ.</span></p>
    <p class="c1"><span class="c0">We also ask everyone to continue supporting Palestine with your prayers and donations, show solidarity with &#127477;&#127480; Palestinian flags and pictures of Al-Aqsa Mosque.</span></p>

    <p class="c1"><span class="c13 c11 c6">5. To Muslim tourists in Japan</span></p>
    <p class="c1"><span>The recent influx in Halal-friendly options in Japan is a result of an increase in Muslim tourists. This is great. There are way more genocide-free options in Japan than in western countries. You can easily avoid &#129656; Coca-cola and Starbucks. So why do we see people come all the way to Japan and still buy those blood soaked drinks? Please make sure that Halal that you consume, doesn&#39;t also have the blood of Palestinians. If a Halal place has Coca-cola, ask them to replace it with Gaza Cola. </span><span class="c6">Ask places you visit to become AFZ</span><span class="c0">.</span></p>

    <p class="c10"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; width: 374.15px; height: 470.86px;"><img src="/assets/img/gaza_cola.jpg" style="width: 374.15px; height: 470.86px; margin-left: 0.00px; margin-top: 0.00px;"></span></p>

    <p class="c1"><span>Please support </span><a href="https://afzjapan.com/en">AFZs</a><span>&nbsp;in Japan whenever you can. Follow </span><span class="c6">@afzjapan</span><span>&nbsp;on </span><a href="https://www.instagram.com/afzjapan/">Instagram</a><span>&nbsp;and </span><a href="https://www.x.com/afzjapan/">X</a><span class="c0">, and share.</span></p>

    <p class="c1"><span>You can learn more about the global AFZ campaign </span><a href="https://www.bdsmovement.net/apartheid-free-zones">here</a><span>, and the BDS Movement </span><a href="https://www.bdsmovement.net/">here</a><span class="c0">.</span></p>

</div>

    </div>
  </section>
</div>

<script>
var types = {{ types | jsonify }};
var json = {{ halal | jsonify }}.filter(geo);
function geo(j) { return j.geo != null }
</script>
