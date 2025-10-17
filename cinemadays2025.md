---
layout: page
image: "https://afzjapan.com/assets/cinema2025/1.png"
css: ["https://cdn.skypack.dev/ol/ol.css", "index.css", "map.css", "list.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", "popup.css"]
js: ["https://cdn.jsdelivr.net/npm/ol@v8.1.0/dist/ol.js", "map.cinema.js", "map.main.js", "list.cinema.js", "ol-ext.js"]
lang: "ja"
---
<!-- div class="imageContainer" style="padding-bottom: 0px; margin-bottom: 0px;">
  <img src="{{site.baseurl}}/assets/img/cinema_bg.png" style="width:100%; padding:0; margin:0;">
</div -->

<!-- div id="afz" style="height: 540px; margin-top: 0; padding-top: 0;"></div>
<div id="popup" class="ol-popup">
  <a href="#" id="popup-closer" class="ol-popup-closer"></a>
  <div id="popup-content"></div>
</div -->

<style>
  html {
    scroll-padding-top: 32px;
  }
  .movie {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1000px;
    height: auto;
    margin: 0 32px 128px;
    padding-top: 8px;
    column-gap: 32px;
    row-gap: 16px;
    border-top: 3px solid #33477d;
  }
  .movie-keyvisual {
    flex: 4;
    margin: 0;
  }
  .movie-keyvisual img {
    max-width: 100%;
    max-height: 400px;
  }
  .movie-info {
    flex: 6;
    font-size: 1.1em;
  }
  .movie-info h3 {
    margin: 0;
    font-size: 1.9em;
  }
  .movie-info h3 span {
    margin-bottom: 2px;
    margin-left: 0;
    padding: 4px 8px;
    font-weight: bold;
    background-color: #a4ffb0;
    color: #33477d;
  }
  .year-length {
    font-size: 1.2em;
    margin-top: 0.2em
  }
  .description {
    line-height: 1.7;
  }

  @media only screen and (max-width: 600px) {
    .movie {
      flex-direction: column;
      margin: 0 16px;
      align-items: initial;
    }
    .movie-keyvisual {
      flex: 1;
    }
    .movie-keyvisual img {
      max-width: 50%;
      height: auto;
    }
    .movie-info {
      flex: 1;
    }
    .movie-info h3 {
      font-size: 1.5em;
    }
    .year-length {
      font-size: 0.9em;
    }
  }
</style>

<div class="imageContainer" style="padding-bottom: 0px; margin-bottom: 0px;">
  <img src="{{site.baseurl}}/assets/cinema2025/1.png" style="width:100%; padding:0; margin:0;">
</div>

<div class="page">
<p>
<div>
<h6><span class="afz-heading-small-colored">上映映画紹介</span></h6>
</div>
<a href="#the-dupes">1．The Dupes 太陽の男たち</a><br/>
<a href="#when-i-saw-you">2．When I Saw You ぼくの見えた道</a><br/>
<a href="#jenin-jenin">3．Jenin Jenin ジェニン、ジェニン</a><br/>
<a href="#upshot">4．Upshot</a><br/>
<a href="#locations">上映会場はこちら</a><br/>
</p>
</div>

<a id="the-dupes" />

<div class="movie">
  <figure class="movie-keyvisual">
    <img src="{{site.baseurl}}/assets/cinema2025/2-kv.jpg">
  </figure>
  <div class="movie-info">
    <h3>
      <span>The Dupes</span><br>
      <span>太陽の男たち</span>
    </h3>
    <p class="year-length">1972年／107分</p>
    <p class="description">パレスチナを代表する作家、ガッサーン・カナファーニーの傑作「太陽の男たち」を映画化。クウェートへ出稼ぎに行くため、給水車のタンクに隠れて密入国しようとするパレスチナ難民の男たち。国境超えの際、のらりくらりとした官僚に時間を取られ、灼熱の沙漠でタンクの中の温度は上がる。助けを叫ぶパレスチナ人の声は、タンクの外に届かない。1968年に書かれた作品が、50年以上経つ今でも強烈なメッセージを放つ。</p>
  </div>
</div>

<a id="when-i-saw-you" />

<div class="movie">
  <figure class="movie-keyvisual">
    <img src="{{site.baseurl}}/assets/cinema2025/3-kv.jpg">
  </figure>
  <div class="movie-info">
    <h3>
      <span>When I Saw You</span><br>
      <span>ぼくの見えた道</span>
    </h3>
    <p class="year-length">2012年／98分</p>
    <p class="description">父と生き別れ、母と一緒にヨルダンで難民となったパレスチナ人少年ターレクは、難民キャンプの生活に馴染めない。子どもの目を通して描かれる、パレスチナ人に押し付けられた不正義、故郷への思い、そしてレジスタンス。ターレクは故郷パレスチナに戻れるのか。パレスチナ人女性として初めて長編映画を撮影したアンマリー・ジャーシル監督による2作目長編映画。第63回ベルリン国際映画祭、最優秀アジア映画賞受賞作。</p>
  </div>
</div>

<a id="jenin-jenin" />

<div class="movie">
  <figure class="movie-keyvisual">
    <img src="{{site.baseurl}}/assets/cinema2025/4-kv.jpg">
  </figure>
  <div class="movie-info">
    <h3>
      <span>Jenin Jenin</span><br>
      <span>ジェニン、ジェニン</span>
    </h3>
    <p class="year-length">2002年／54分</p>
    <p class="description">イスラエルで上映禁止になった「ジェニンの戦い」を題材にしたドキュメンタリー。2002年のイスラエルによる軍事作戦中、ジェニン難民キャンプへのジャーナリストや人権団体の立ち入りは禁止され、パレスチナ側のナラティブは届かない。パレスチナ系イスラエル人、モハンマド・バクリ監督がカメラを手にジェニンで拾う、パレスチナ人の生の声。</p>
  </div>
</div>

<a id="upshot" />

<div class="movie">
  <figure class="movie-keyvisual">
    <img src="{{site.baseurl}}/assets/cinema2025/5-kv.jpg">
  </figure>
  <div class="movie-info">
    <h3><span>Upshot</span></h3>
    <p class="year-length">2024年／34分</p>
    <p class="description">田舎で動物や植物を育て、隠居生活を送るパレスチナ人老夫婦。5人の子供たちの現状や将来について、二人の意見はいつもぶつかり合う。ある時そんな二人の日常につらい過去を思い出させる来客がある。凄惨な爪痕と共に生きることを強いられた、ガザの人々の30年後の姿を映し出す短編ドラマ。</p>
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
     <th>上映会場</th>
   </tr>
 </thead>
 <tbody id="CinemaTable">

 </tbody>
</table>

</div>
