---
layout: page
title: "ニュース"
description: "AFZニュース"
image: "https://afzjapan.com/assets/img/afz_scr_pamphlet.png"
css: ["index.css", "links.css", "images.css", "jsCalendar.css", "eventsCal.css"]
js: ["jsCalendar.js", "eventsCal.js"]
---
<table style="table-layout: fixed; width: 100%; min-height: 80px" class="grad">
  <tr style="padding: 0; margin:0; max-height: 80px;">
    <td><div style="margin-left: 40px"><h5><span class="afz-heading-colored">AFZニュース</span></h5></div>
    </td>
  </tr>
</table>

<div class="page" style="max-width: 630px;">

  <div id="wrapper">
    <!-- Calendar element -->
    <div id="events-calendar"></div>
    <!-- Events -->
    <div id="events"></div>
    <!-- Clear -->
    <div class="clear"></div>
  </div>
  <div class="clear"></div>

<div class="link-appendix" style="margin-top: 16px">

  <div class="link-items" id="LinksTable">

  {% for news in site.posts %}
    <div class="link-item">
      <a class="link" href="{{ news.url }}">
        <div class="info">
          <div class="media">
            {% unless news.icon == nil %}
              <img src="{{ news.icon }}" width="20px">
            {% endunless %}
            <span class="afz-heading-small-colored">{{ news.title }}</span>
          </div>
          <div class="description">{{ news.excerpt }}</div>
          {% unless news.link == nil %}
           <div class="mail">< class="z" href="mailto:change&subject={{ news.title }}&body={{ news.description }}">send mail</a></div>
          {% endunless %}
        </div>
        {% unless news.image == nil %}
          <div class="thumbnail"><img src="{{ news.image }}" alt="{{ news.alt }}"></div>
        {% endunless %}
      </a>
    </div>
  {% endfor %}

  </div>

</div>

</div>
