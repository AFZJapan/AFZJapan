---
layout: page
title: "links"
description: "パレスチナ関連リンク集"
image: "https://afzjapan.com/assets/img/afz_scr_pamphlet.png"
css: ["index.css", "links.css", "images.css"]
---

<table style="table-layout: fixed; width: 100%; min-height: 80px" class="grad">
  <tr style="padding: 0; margin:0; max-height: 80px;">
    <td><div style="margin-left: 40px"><h5><span class="afz-heading-colored">パレスチナ関連リンク集</span></h5></div>
    </td>
  </tr>
</table>

<div class="link-appendix" style="margin-top: 16px">

  <div class="link-items" id="LinksTable">

  {% for link in site.data.links %}
    <div class="link-item">
      <a href="{{ link.url }}" target="_blank">
        <div class="info">
          <div class="media">
            {% unless link.icon == nil %}
              <img src="{{ link.icon }}" width="20px">
            {% endunless %}
            <strong>{{ link.title }}</strong>
          </div>
          <div class="description">{{ link.description }}</div>
        </div>
        {% unless link.thumbnail == nil %}
          <div class="thumbnail"><img src="{{ link.thumbnail }}" alt="{{ link.alt }}"></div>
        {% endunless %}
      </a>
    </div>
  {% endfor %}

  </div>

</div>
