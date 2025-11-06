async function getData() {
    let api = '/data/links.json';
    let apiDataResponse = await fetch(api);
    let data = await apiDataResponse.json();
    return {
        links: data
    }
}

let displayLinks = () => {
    getData().then(result => {
        let rows = '';
        let body = document.getElementById('LinksTable');
        let links = result.links;
        for (let i = 0; i < links.length; i++) {
            rows += `
    <div class="news-item">
      <a href="${links[i].link}" target="_blank">
        <div class="info">
          <div class="media">`;
            if (links[i].icon) { rows += `<img src="${links[i].icon}" width="20px"> `; }
            rows += `<strong>${links[i].title}</strong>
          </div>
          <div class="description">${links[i].description}</div>
        </div>`;
        if (links[i].thumbnail) { rows += `<div class="thumbnail"><img src="${links[i].thumbnail}" alt="${links[i].alt}"></div>`; }
          rows += `
      </a>
    </div>`;
            body.innerHTML = rows;
        }
    })
}

displayLinks();
