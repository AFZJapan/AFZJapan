---
layout: new-page
title: "パレスチナ映画祭2026 会場募集"
description: "「パレスチナ映画祭2026」会場募集ページです"
image: ""
css: ["index.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "cinemadays2026.css", "cinemadays2025.css"]
js: []
lang: "ja"
robots: noindex
---

<div class="main-content">

<div class="imageContainer" style="padding-bottom: 0px; margin-bottom: 0px;">
  
  <img src="{{site.baseurl}}/assets/cinema2026/1.png" style="width:100%; padding:0; margin:0;" alt="バルフォア宣言が出された11月2日、パレスチナ人のナラティブをかき消そうとする圧力に文化で抗議、連帯する映画祭！／世界中で同時開催！日本の上映会場、60+！すべての会場で入場無料／共催：日本各地の上映会場、AFZ Japan推進チーム">
</div>

<div class="cinemaday-heading">

  <div class="cinemaday-heading-info">
    <h1>
      パレスチナ映画祭2026<br>
      <span class="marker">会場募集のお知らせ</span>
    </h1>

    <p>
      <a href="./cinemadays2025">昨年の「パレスチナ映画祭2025」</a>に引き続き、今年も11月2日に「パレスチナ映画祭2026」を開催します！<br>
      映画館、お店など、上映スペースをお持ちの方、パレスチナ映画を上映しませんか？ 
    </p>

    <section>
      <h4>上映日</h4>
      <p>
        <span style="font-size: 1.3em;">2026年11月2日（月）</span><br>
        <span style="font-size: 1.0em">11月1日（日）・3日（火/祝）・4日（水）の開催も可能です</span>
      </p>
    </section>

    <section>
      <h4>作品リスト</h4>
      <table class="movie-list">
        <thead>
          <tr><th>詳細</th> <th>字幕言語</th></tr>
        </thead>
        <tbody>

  {% assign movies = site.data.cinema2026_movies %}
  {% for m in movies %}

          <tr>
            <td>

              <div class="col-12" style="padding-left: 8px; padding-right: 16px">
                <article class="article" style="margin-bottom: 0">
                  <div class="article-header" style="height: 300px;">
                    <div class="article-image" data-background="{{site.baseurl}}/assets/cinema2026/{{ m.img }}" style="background-image: url(&quot;{{site.baseurl}}/assets/cinema2026/{{ m.img }}&quot;);">
                    </div>
                    <div class="article-title">
                      <h2><span style="color:white">{{ m.ja }}<br>{{ m.name }}</span></h2>
                    </div>
                  </div>
                  <div class="article-details">
                    <p>{{ m.desc }}</p>
                    <div class="article-cta">
                      {{ m.length }}・{{ m.genre }}
                    </div>
                  </div>
                </article>
              </div>

            </td>
            <td>{{ m.subtitles }}</td>
          </tr>

  {% endfor %}

        </tbody>
      </table>
      <p>
        詳細は、Filmlab Palestine の紹介ページにも載っています<br>
        → <a href="https://flp.ps/node/2005" target="_blank">https://flp.ps/node/2005</a>
      </p>
    </section>

    <section>
      <h4>上映条件</h4>
      <p>
        上映にあたっては、Filmlabから指定されている上映条件や、運営上の都合からお願いしたいことがいくつかあります。
        これらを満たせるかどうか、予めご確認の上で会場の登録をおねがいします！
      </p>
      <ol>
        <li>
          <strong>条件1｜すでにスペースを持っている人向けの募集です</strong><br>
          基本的には、すでに利用可能なスペースを持っている方に登録頂く想定のものです。<br>
          上映会のために特別に会場を借りる場合、その資金は主催メンバー内で出すことにとどめることを推奨します。「条件2」とも関連しますが、来場者にカンパを求めることは避けてください。<br>
        </li>
        <li>
          <strong>条件2｜映画を観賞するためのお金をとらない</strong><br>
          
          ❌ NG例：入場料をとる<br>
          ❌ NG例：カンパで会場費を集めること<br>
          ✅ OK例：スペース内でドリンクやグッズの販売をする<br>
          <br>
        </li>
        <li>
          <strong>条件3｜会場内で寄付金を集める場合、主催（Palestine Filmlab）が募っているものではないことを明示する</strong><br>
          パレスチナのための支援金・寄付金を集めること自体は問題ありません。<br>
          ただし、映画祭の主催（Palestine Filmlab）が集めているものではなく、スペースオーナーが集めているものであることを、はっきりと明示してください。<br>
        </li>
      </ol>
    </section>

    <section>
      <h4>会場登録フォーム</h4>
      <iframe data-tally-src="https://tally.so/embed/2EdMEg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" frameborder="0" marginheight="0" marginwidth="0" title="パレスチナ映画祭2026｜上映会場登録" style="width:100%; height:2200px; max-width:900px;"></iframe>
<script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>
    </section>

    <section>
      <h4>お問い合わせ</h4>
      <p>
        ご不明点は<a href="/about">AFZ Japan推進チーム</a>までお問い合わせください
      </p>
    </section>
  </div>

</div>
