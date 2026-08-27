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
    <link rel="stylesheet" href="/assets/css/main.css">
    <link rel="stylesheet" href="/assets/css/page.css">
    <link rel="stylesheet" href="/assets/css/index.css">
    <link rel="stylesheet" href="https://cdn.skypack.dev/ol/ol.css">
    <link rel="stylesheet" href="/assets/css/map.css">
    <link rel="stylesheet" href="/assets/css/popup.css">

    <meta name="twitter:site" content="@afzjapan">
    <meta name="twitter:creator" content="@afzjapan" />

    <meta name="twitter:description" content="パレスチナあたたかい家Vol3：2026年11月14日（土）〜12月31日（木）全国各地のパレスチナ連帯を表明するスペースで開催！">

  </head>

<body class="layout-2">
  <div id="app">

  <div class="main-content">

<a id="locations" />
<div id="afz" style="height: 540px; margin-top: 0; padding-top: 0;"></div>
<div id="popup" class="ol-popup">
  <a href="#" id="popup-closer" class="ol-popup-closer"></a>
  <div id="popup-content"></div>
</div>

{% assign pref = site.data.prefectures %}
{% assign list = site.data.ourwarmhome2026 %}

<script>
var json = {{ list | jsonify }};
</script>

</div>

  </div>

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
