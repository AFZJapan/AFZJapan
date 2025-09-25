async function getData() {
    let api = '/data/list.json';
    let apiDataResponse = await fetch(api);
    let data = await apiDataResponse.json();
    return {
        afzs: data
    }
}

let displayList = () => {
    getData().then(result => {
        let rows = '';
        let tbody = document.getElementById('AFZTable');
        let afz = result.afzs;
        for (let i = 0; i < afz.length; i++) {
            rows += `<tr>
                       <td style="vertical-align: bottom;">${afz[i].name} <img align='top' src='/assets/icons/${afz[i].icon}.png' width='20px' height='20px' /> `; if (afz[i].cinema) { rows += ` <img align='top' src='/assets/icons/cinema_small.png' width='20px' height='20px' /> ` } rows += ` <br/>`;
            for (const key in afz[i].tags) {
            rows += `<div class="chip outlined" style="vertical-align: middle; font-size: 10px; height: 24px; line-height:24px; margin-bottom:0px">${afz[i].tags[key]}</div>`;
            }
            rows += `
                       </td>
                       <td>${afz[i].place}</td>
                       <td>${afz[i].sns}</td>
                     </tr>`;

            tbody.innerHTML = rows;
        }
    })
}

displayList();

let filterByPlace = () => {
    getData().then(result => {
        let rows = '';
        let tbody = document.getElementById('AFZTable');
        let val = document.getElementById('place').value.toLowerCase();
        let afz = result.afzs;

        for (let i = 0; i < afz.length; i++) {
            if (afz[i].place.includes(val)) {
                rows += `<tr>
                           <td style="vertical-align: bottom;">${afz[i].name} <img align='top' src='/assets/icons/${afz[i].icon}.png' width='20px' height='20px' /><br/>
                           <td>${afz[i].place}</td>
                           <td>${afz[i].sns}</td>
                         </tr>`;
            }
        }
        tbody.innerHTML = rows.length ? rows : `<h6 style="margin-left:20px;">まだ登録された AFZ はありません</h6>`;
    });
}

var timer;
function filterWithDelay() {
    clearTimeout(timer);
    timer = setTimeout(filterByPlace, 500);
}
