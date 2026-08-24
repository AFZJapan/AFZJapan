---
layout: null
---

<html lang="ja">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <title>
      パレスチナあたたかい家
    </title>

    <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico">
    <link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-table@1.27.1/dist/bootstrap-table.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/2.3.7/css/dataTables.dataTables.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="stylesheet" href="/assets/css/page.css">
    <link rel="stylesheet" href="/assets/css/index.css">
    <link rel="stylesheet" href="/assets/css/ourwarmhome2026.css">
    <link rel="stylesheet" href="https://cdn.skypack.dev/ol/ol.css">
    <link rel="stylesheet" href="/assets/css/map.css">
    <link rel="stylesheet" href="/assets/css/list.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/css/popup.css">
    <link rel="stylesheet" href="/assets/css/syntax.css">
    <link rel="stylesheet" href="/assets/css/social.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=info" />
    <link rel="alternate" type="application/rss+xml" title="RSS" href="/feed.xml">

    <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml">
    <!-- Begin Jekyll SEO tag v2.8.0 -->
<meta name="generator" content="Jekyll v3.10.0" />
<meta property="og:title" content="パレスチナあたたかい家" />
<meta name="author" content="AFZ推進チーム" />
<meta property="og:locale" content="ja_JP" />
<meta name="description" content="パレスチナあたたかい家Vol3：2026年11月14日（土）〜12月31日（木）全国各地のパレスチナ連帯を表明するスペースで開催！" />
<meta property="og:description" content="パレスチナあたたかい家Vol3：2026年11月14日（土）〜12月31日（木）全国各地のパレスチナ連帯を表明するスペースで開催！" />
<link rel="canonical" href="https://afzjapan.com/embed/ourwarmhome2026_locations" />
<meta property="og:url" content="https://afzjapan.com/embed/ourwarmhome2026_locations" />
<meta property="og:site_name" content="アパルトヘイト・フリー・ゾーン（AFZ）" />
<meta property="og:image" content="https://afzjapan.com/assets/ourwarmhome2026/ogp1.webp" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:image" content="https://afzjapan.com/assets/ourwarmhome2026/ogp1.webp" />
<meta property="twitter:title" content="パレスチナあたたかい家" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebPage","author":{"@type":"Person","name":"AFZ推進チーム"},"description":"パレスチナあたたかい家Vol3：2026年11月14日（土）〜12月31日（木）全国各地のパレスチナ連帯を表明するスペースで開催！","headline":"パレスチナあたたかい家","image":"https://afzjapan.com/assets/ourwarmhome2026/ogp1.webp","url":"https://afzjapan.com/embed/ourwarmhome2026_locations"}</script>
<!-- End Jekyll SEO tag -->


    <meta name="twitter:site" content="@afzjapan">
    <meta name="twitter:creator" content="@afzjapan" />

    <meta name="twitter:description" content="パレスチナあたたかい家Vol3：2026年11月14日（土）〜12月31日（木）全国各地のパレスチナ連帯を表明するスペースで開催！">

    <!-- General CSS Files -->
    <link rel="stylesheet" href="/assets/modules/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/modules/fontawesome/css/all.min.css">

    <!-- CSS Libraries -->

    <!-- Template CSS -->
    <link rel="stylesheet" href="/assets/css/new-components.css">
    <link rel="stylesheet" href="/assets/css/new-style.css">
    <link rel="stylesheet" href="/assets/css/top.css">

  </head>

<body class="layout-2">
  <div id="app">
    <div class="main-wrapper">

  <div class="main-content">

  <section class="section">

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



      <footer class="main-footer">
        <div class="footer-right">
          <a class="grey-text text-lighten-4 right" style="font-size: 11px; text-align: center;" href="/privacy">
            個人情報保護方針
          </a>
        </div>
      </footer>
    </div>
  </div>

  <!-- General JS Scripts -->
  <script src="/assets/modules/jquery.min.js"></script>
  <script src="/assets/modules/popper.js"></script>
  <script src="/assets/modules/tooltip.js"></script>
  <script src="/assets/modules/bootstrap/js/bootstrap.min.js"></script>
  <script src="/assets/modules/nicescroll/jquery.nicescroll.min.js"></script>
  <script src="/assets/modules/moment.min.js"></script>
  <script src="/assets/js/new-stisla.js"></script>

  <!-- JS Libraies -->
  <script src="/assets/modules/sticky-kit.js"></script>

  <!-- Page Specific JS File -->

  <!-- Template JS File -->
  <script src="/assets/js/new-scripts.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js"></script>
  <script src="/assets/js/map.ourwarmhome.js"></script>
  <script src="/assets/js/map.main.js"></script>
  <script src="/assets/js/ol-ext.js"></script>
  <script src="/assets/js/main.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js"></script>
  <script src="/assets/js/map.base.js"></script>
  <script src="/assets/js/map.main.js"></script>
  <script src="/assets/js/ol-ext.js"></script>

</body>
</html>
