---
layout: new-page
title: "パレスチナ映画祭2026"
description: "11月2日（月）バルフォア宣言に抗議するかたちで世界各地で同時開催される映画祭です。主催：Filmlab Palestine／共催：日本各地の上映会場、AFZ Japan推進チーム"
image: "assets/cinema2026/cinemaday2026-banner1.png"
css: ["cinemadays2026.css", "https://cdn.skypack.dev/ol/ol.css", "index.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "popup.css", "top.css", ]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "map.cinemadays2026.js", "map.main.js", "ol-ext.js"]
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
      <div id="afz" class="afz-map" style="height: 540px; margin-top: 0; padding-top: 0;"></div>
      <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content">
          <div id="popup-title"></div>
          <div id="popup-body"></div>
        </div>
      </div>

      {% assign pref = site.data.prefectures %}
      {% assign list = site.data.cinema2026_places %}
      {% assign popup_index = 0 %}

      <div class="table-filter">
        <div class="prefecture-filter">
          <label for="prefecture-filter"><i class="material-icons white-icon">filter_list</i> 都道府県</label>
          <select id="prefecture-filter">
            <option value="">すべて表示</option>
            {% for p in pref %}
              {% if p.id > 0 %}
            <option value="{{ p.id }}">{{ p.name }}</option>
              {% endif %}
            {% endfor %}
          </select>
        </div>
        <fieldset class="date-filter">
          <i class="material-icons white-icon">filter_list</i> 上映日
          <label><input type="checkbox" name="screening-date" value="nov1" checked>11/1</label>
          <label><input type="checkbox" name="screening-date" value="nov2" checked>11/2</label>
          <label><input type="checkbox" name="screening-date" value="nov3" checked>11/3</label>
          <label><input type="checkbox" name="screening-date" value="nov4" checked>11/4</label>
        </fieldset>
        <label class="exclude-private">
          <input type="checkbox" id="exclude-private">
          プライベート上映を除く
        </label>
      </div>
      <div class="notice-before-table">
        <p>＊会場／企画者による告知ページを［上映日］の部分にリンクしています（AFZ推進チームが見つけたものから掲載しています）</p>
      </div>
      <div class="scroll-hint">右にもスクロールできます 👉</div>
      <div class="table-x-scrollable">
        <table class="afz-table table-bordered">
          <thead>
            <tr>
              <th class="column-pref">
                <div class="contain-filter">
                  所在地
                </div>
              </th>
              <th>名前</th>
              <th><i class="fas fa-solid fa-link"></i></th>
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
            {% for place in list %}

            {% capture row_tags %}{% for t in place.tags %}{{ t.ja }} {{ t.en }} {% endfor %}{% endcapture %}
            <tr data-pref="{{ place.prefecture }}" data-is-public="{% if place.is_public == true %}true{%else%}false{%endif%}" data-dates="{{ place.screening_dates | join: ',' }}" class="{% if place.is_public == false %}is-private{%endif%}">
              <td class="cell-prefecture">
                {{ pref[place.prefecture].name }}
                <span class="city">{{ place.city }}</span>
              </td>
              <td>
                {{place.place_name}}
                {% if place.is_public == false %}
                  <div class="is-private-badge"><i class="fas fa-lock"></i> プライベート上映</div>
                {% endif %}
                {% if place.organizer_name != "" %}
                  <div class="organizer">
                    <span class="organizer-badge">企画者</span> {{ place.organizer_name }}
                  </div>
                {% endif %}
              </td>
              <td>
              {% if place.link_web != '' %}
                <a href="{{ place.link_web }}" target="_blank"><img align="top" src="/assets/icons/website.png" width="20px" height="20px" alt="Webサイト"></a>
              {% endif %}
              {% if place.link_instagram != '' %}
                <a href="{{ place.link_instagram }}" target="_blank"><img align="top" src="/assets/icons/instagram.png" width="20px" height="20px" alt="Instagram"></a>
              {% endif %}
              {% if place.link_twitter != '' %}
                <a href="{{ place.link_twitter }}" target="_blank"><img align="top" src="/assets/icons/twitter.png" width="20px" height="20px" alt="X"></a>
              {% endif %}
              </td>
              <td>
                {% if place.link_announce != '' %}
                  <a href="{{ place.link_announce }}" target="_blank" class="link-announce">
                {% endif %}
                {%- for date in place.screening_dates -%}
                  {%- case date -%}
                    {%- when "nov1" -%}11/1
                    {%- when "nov2" -%}11/2
                    {%- when "nov3" -%}11/3
                    {%- when "nov4" -%}11/4
                  {%- endcase -%}
                  {%- unless forloop.last -%}・{% endunless -%}
                {%- endfor -%}
                {% if place.link_announce != '' %}
                  </a>
                {% endif %}
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
      </div>

      <div class="afz-table-fallback hidden">
        <div>
          No results..
        </div>
      </div>

      <script>
      var json = {{ list | jsonify }};
      </script>

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
