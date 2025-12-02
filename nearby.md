---
layout: nearby
---
<div id="afz" style="height: 100%;"></div>
<div id="popup" class="ol-popup">
  <a href="#" id="popup-closer" class="ol-popup-closer"></a>
  <div id="popup-content"></div>
</div>
{% assign types = site.data.types %}
{% assign list = site.data.list %}
<script>
var types = {{ types | jsonify }};
var json = {{ list | jsonify }}.filter(geo);
function geo(j) { return j.geo != null }
</script>
<script src="/assets/js/map.base.js"></script>
<script src="/assets/js/nearby.js"></script>
