---
layout: new-page
title: "パレスチナ映画祭2026"
description: "11月2日（月）バルフォア宣言に抗議するかたちで世界各地で同時開催される映画祭です。主催：Palestine Filmlab／共催：日本各地の上映会場、AFZ Japan推進チーム"
image: "assets/cinema2026/cinemaday2026-banner1.png"
css: ["cinemadays2026.css", "https://cdn.skypack.dev/ol/ol.css", "index.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "popup.css", "top.css", ]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "map.base.js", "map.main.js", "ol-ext.js"]
lang: "ja"
---

<div class="main-content">

<div class="imageContainer" style="padding-bottom: 0px; margin-bottom: 0px;">
  
  <img src="{{site.baseurl}}/assets/cinema2026/cinemaday2026-banner1.png" style="width:100%; max-width:1200px; padding:0; margin:0;" alt="パレスチナ映画祭2026 バナー画像">
</div>

<div class="cinemaday-heading">

  <div class="cinemaday-heading-info">
    <h1>
      パレスチナ映画祭2026<br>
      <small>Palestine Cinema Days Around the World</small>
    </h1>

    <p>
      今年も、ラマッラー拠点の“Filmlab Palestine”の呼びかけに応え、日本からも「Palestine Cinema Days Around the World」（パレスチナ映画祭）に参加します。<br>
      パレスチナ映画祭は、バルフォア宣言が出された11月2日に、宣言に抗議する形で全世界で同時開催される映画祭です。
    </p>
    <p>
      日本では、<a href="./cinemadays2025">昨年の「パレスチナ映画祭2025」</a>に引き続き、AFZ Japanが呼びかけを行っており、各地で上映会が行われます。ぜひお近くの会場を探して、足を運んでみてください！
    </p>

    <nav class="internal-nav">
      <a href="#general">概要 <small>▼</small></a>
      <a href="#movie-info">作品リスト <small>▼</small></a>
      <a href="#locations">上映会場 <small>▼</small></a>
      <a href="#contact">お問い合わせ <small>▼</small></a>
    </nav>

    <section>
      <h4 id="general">概要</h4>
      <ul>
        <li><strong>イベント名</strong>｜パレスチナ映画祭2026<br>
          Palestine Cinema Days Around the World</li>
        <li><strong>主催</strong>｜<a href="https://flp.ps/node/2005" target="_blank">Filmlab Palestine</a></li>
        <li><strong>共催</strong>｜AFZ Japan推進チーム, 日本各地の各上映会場</li>
        <li><strong>上映日</strong>｜2026年11月2日（月）<br>
          11月1日（日）・3日（火/祝）・4日（水）に上映する会場もあります
        </li>
      </ul>
    </section>

    <section>
      <h4 id="movie-info">作品リスト</h4>
      <div class="movie-list">
  {% assign movies = site.data.cinema2026_movies %}
  {% for m in movies %}

        <article class="movie-item">
          <div class="header">
            <img src="{{site.baseurl}}/assets/cinema2026/{{ m.img }}">
          </div>

          <div class="detail">
            <h5 class="title">
              <span>{{ m.name_ja }}<br>{{ m.name }}</span>
            </h5>
            <div>
              <div class="article-cta">
                {{ m.year }}年｜{{ m.length }}・{{ m.genre }}<br>
                監督＝{{ m.director }}<br>
                <span class="badge">音声｜Original Audio</span> {{ m.audio }}<br>
                <span class="badge">字幕｜Subtitles</span> {{ m.subtitles }}
              </div>
              <details class="description-box">
                <summary><span>詳しく</span></summary>
                <p class="description">{{ m.desc }}</p>
                <p class="appendix">{{ m.appendix }}</p>
              </details>
            </div>
          
          </div>
        </article>

  {% endfor %}

      </div>
      <p>
        詳細は、Filmlab Palestine の紹介ページにも載っています<br>
        → <a href="https://flp.ps/node/2005" target="_blank">https://flp.ps/node/2005</a>
      </p>
    </section>

    <section id="locations">
      <h4>上映会場</h4>

      {% comment %} the map  {% endcomment %}
      {% comment %}
        <div id="afz" style="height: 540px; width: 100%; margin-bottom:10px;"></div>
        <div id="popup" class="ol-popup">
          <a href="#" id="popup-closer" class="ol-popup-closer"></a>
          <div id="popup-content"></div>
        </div>

      {% comment %} categories {% endcomment %}

      {% assign types = site.data.types %}
      <ul id="legend">
        {% for type in types %}
        <li><a href="javascript:;" data-type="{{ type.type }}"><div class="badge badge-light"><img src="{{site.baseurl}}/assets/icons/{{ type.type }}.png" height=20 width=20><span style="margin-left: 5px;">{{ type.name }}</span></div></a></li>
        {% endfor %}
        <li><a onclick="filterAll();" data-type="" class="type-show-all" style="display:none;"><div class="badge badge-light"><span>✖︎ 絞り込みを解除</span></div></a></li>
      </ul>

      {% assign pref = site.data.prefectures %}

      <div class="tag-search" style="margin-bottom: 8px;">
        <input type="text" id="tag-search"
              placeholder="タグで検索（例: vegan, ハラール, オーガニック）"
              class="form-control"
              style="max-width: 360px;">
      </div>
      {% endcomment %}

      <div style="border: 1px solid #d8d8d8;background-color:#efefef;padding:2em 2em 20em;">
        ただいま準備中<br>
        今回は<strong>140以上の会場</strong>で上映予定です（※プライベート上映含む）
      </div>
      {% comment %}
      <table class="afz-table table-bordered">
        <thead>
          <tr>
            <th>名前</th>
            <th class="column-pref">
              <div class="contain-filter">
                所在地
                <li class="dropdown d-inline">
                  <a data-toggle="dropdown" class="pref-dropdown-trigger has-dropdown font-weight-600 dropdown-toggle" aria-expanded="false" href="javascript:;" data-activates="pref-dropdown"><span class="material-icons white-icon" style="color: white;">filter_list</span></a>
                  <ul class="dropdown-menu pre-scrollable" style="height: auto; max-height: 280px; overflow: hidden; overflow-y: auto;" id="pref-dropdown">
                    <li class="nav-item"><a href="javascript:;" data-pref-id="" class="nav-link">すべて表示</a></li>
                    <li class="nav-item"><hr class="m-0"></li>
                    {% for p in pref %}
                      {% if p.id > 0 %}
                    <li class="nav-item"><a href="javascript:;" data-pref-id="{{ p.id }}" class="nav-link">{{ p.name }}</a></li>
                      {% endif %}
                    {% endfor %}
                  </ul>
                </li>
              </div>
            </th>
            <th><i class="fas fa-rss"></i></th>
            <th><i class="fas fa-calendar"></i> 上映日</th>
            <th style="writing-mode: vertical-rl;"><i class="fas fa-film"></i> ハイファに戻って</th>
            <th style="writing-mode: vertical-rl;"><i class="fas fa-film"></i> ボイコット</th>
            <th style="writing-mode: vertical-rl;"><i class="fas fa-film"></i> 採集する人々</th>
            <th style="writing-mode: vertical-rl;"><i class="fas fa-film"></i> 花は静かに証言する</th>
            <th style="writing-mode: vertical-rl;"><i class="fas fa-film"></i> ガザウィヤート</th>
            <th style="writing-mode: vertical-rl;"><i class="fas fa-film"></i> The Dream</th>
            <th style="writing-mode: vertical-rl;"><i class="fas fa-film"></i> With Hasan in Gaza</th>
            <th style="writing-mode: vertical-rl;"><i class="fas fa-film"></i> They Do Not Exist</th>
          </tr>
      </thead>
      <tbody id="AFZTable">
        {% assign popup_index = 0 %}
        {% assign list = site.data.cinema2026_places %}
        {% for place in list %}

        {% capture row_tags %}{% for t in place.tags %}{{ t.ja }} {{ t.en }} {% endfor %}{% endcapture %}
        <tr data-pref="{{ place.pref }}" data-type="{{ types[place.type].type }}" data-tags="{{ row_tags | downcase }}">
          <td> {{place.place_name}} <img align='top' src='/assets/icons/{{ types[place.type].type }}.png' width='20px' height='20px' /> {% if place.c2025 %} <img align='top' src='/assets/icons/cinema_small.png' width='20px' height='20px' /> {% endif %} {% if place.geo != nil %} <a href="#map" onclick="popup({% increment popup_index %});"><img align='top' src='/assets/icons/pin.png' width='20px' height='20px' /></a> {% endif %} <br>
          {% for t in place.tags %}

            <div class="badge badge-light" style="  margin-top:10px">{{ t.ja }}</div>
          {% endfor %}
          </td>
          <td>{{ pref[place.pref].name }}</td>
          <td>
          {% for link in place.links %}
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
          <td>
            {%- for date in place.screening_dates -%}
              {%- case date -%}
                {%- when "nov1" -%}11/1
                {%- when "nov2" -%}11/2
                {%- when "nov3" -%}11/3
                {%- when "nov4" -%}11/4
              {%- endcase -%}
              {%- unless forloop.last -%}・{% endunless -%}
            {%- endfor -%}
          </td>
          <td>{% if place.screening_movies contains "return_to_haifa" %}✓{% endif %}</td>
          <td>{% if place.screening_movies contains "boycott" %}✓{% endif %}</td>
          <td>{% if place.screening_movies contains "foragers" %}✓{% endif %}</td>
          <td>{% if place.screening_movies contains "the_flower_stand" %}✓{% endif %}</td>
          <td>{% if place.screening_movies contains "gazawyat" %}✓{% endif %}</td>
          <td>{% if place.screening_movies contains "the_dream" %}✓{% endif %}</td>
          <td>{% if place.screening_movies contains "with_hasan" %}✓{% endif %}</td>
          <td>{% if place.screening_movies contains "they_do_not_exist" %}✓{% endif %}</td>
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
      {% endcomment %}

    </section>


    <section>
      <h4 id="contact">お問い合わせ</h4>
      <p>
        ご連絡先：<a href="/about">AFZ Japan推進チーム</a><br>
        ＊各上映会場については、会場に直接お尋ねください
      </p>
    </section>

    <div class="spacer" style="height: 500px">
    </div>
  </div>

</div>
