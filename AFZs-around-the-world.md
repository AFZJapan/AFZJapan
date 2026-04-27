---
layout: new-page
image: "https://afzjapan.com/assets/img/afz.png"
css: ["index.css", "links.css", "images.css"]
---
<div class="main-content">

  <section class="section">
    <div class="section-header">
      <h2 class="section-title">AFZs around the world!</h2>
    </div>

<div class="link-appendix" style="margin-top: 16px">

  <div class="link-items" id="LinksTable">

  {% for link in site.data.world %}
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

  </section>

<!-- TODO: maybe make a world map later -->

</div>
