---
layout: new-page
title: "パレスチナあたたかい家"
description: "パレスチナあたたかい家Vol3：2026年11月14日（土）〜12月31日（木）全国各地のパレスチナ連帯を表明するスペースで開催！"
image: "/assets/ourwarmhome2026/ogp1.webp"
css: ["index.css", "ourwarmhome2026.css", "https://cdn.skypack.dev/ol/ol.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "popup.css"]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "map.ourwarmhome.js", "map.main.js", "ol-ext.js"]
---
<div class="main-content">

  <section class="section">
    <div class="section-header">
      <h2 class="section-title">「パレスチナ あたたかい家 Vol.3 ——Take Action / 学ぶ、作る、抵抗する」</h2>
      <div class="section-header-breadcrumb" style="padding: 0 16px;">
      </div>
    </div>
    <div class="main-content-inner">
      <div class="statement-original">
        <div class="callout">
          <p class="large">
            パレスチナの誰もが<br>
            あたたかい家で自由に暮らすことを願う<br>
            市民による展示会「パレスチナ あたたかい家」が<br>
            <strong>11月29日の「パレスチナ人民連帯国際デー」</strong>に合わせて<br> 
            「アート×抵抗」のイベントを<br>
            全国のスペースとアーティストに呼びかけ<br>
            同時開催します。
          </p>
          <hr>
          <p class="center">
            <strong>呼びかけ</strong>：あたたかい家<br>
            <strong>運営協力</strong>：AFZ Japan
          </p>
        </div>
      </div>

      <div class="basic-info">
        <ul>
          <li><strong>期間</strong>：2026年11月14日（土）〜12月31日（木） <small>※各会場により異なります</small></li>
          <li><strong>会場</strong>：全国の書店やカフェなど、パレスチナに連帯するスペース</li>
          <li><strong>主な内容</strong>：ポスター作品の展示</li>
        </ul>

        <div class="link-button">
          <a class="btn btn-primary btn-lg" href="https://sites.google.com/view/ourwarmhome" taget="_blank">
            <span style="text-align: center;">公式サイト<i class="fas fa-external-link-alt"></i></span>
          </a>
        </div>
      </div>
    </div>

<a id="locations" />
<div id="afz" style="height: 540px; margin-top: 0; padding-top: 0;"></div>
<div id="popup" class="ol-popup">
  <a href="#" id="popup-closer" class="ol-popup-closer"></a>
  <div id="popup-content"></div>
</div>

<div>

<table class="afz-table table-bordered">
  <thead>
    <tr>
      <th>展示会場 【 <img align="middle" src="/assets/icons/afz.png" width="16" height="16" style="vertical-align: sub;"> このマークはAFZ登録スペースです 】</th>
      <th>Link</th>
      <th><img align="top" src="/assets/icons/location.png" width="20px" height="20px"></th>
    </tr>
  </thead>
  <tbody id="CinemaTable">

  {% assign pref = site.data.prefectures %}
  {% assign list = site.data.ourwarmhome2026 %}
  {% for c in list %}
  <tr>
    <td style="vertical-align: bottom;">{{ c.name }}{% if c.afz %} <img src="/assets/icons/afz.png" width="16" height="16" style="vertical-align: sub;">{% endif %}
    </td>
    <td style="text-align:center;">
    {% if c.link %}<a href="{{ c.link }}" target="_blank"><img src="/assets/icons/website.png" width="16" height="16"></a>{% endif %}
    </td>
    <td style="word-break: keep-all;">{{ pref[c.pref].name }}</td>
  </tr>
  {% endfor %}

  </tbody>
</table>
</div>

<script>
var json = {{ list | jsonify }};
</script>

  </section>
</div>
