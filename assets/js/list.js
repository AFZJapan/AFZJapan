async function getData() {
    let api = '/assets/files/data.json';
    let apiDataResponse = await fetch(api);
    let data = await apiDataResponse.json();
    return {
        afzs: data
    }
}

let displayData = () => {
    getData().then(result => {
        let rows = '';
        let tbody = document.getElementById('AFZTable');
        let afz = result.afzs;
        for (let i = 0; i < afz.length; i++) {
            rows += `<tr>
                    <td>${afz[i].name}</td>
                    <td>${afz[i].place}</td>
                    <td>${afz[i].sns}</td></tr>`

            tbody.innerHTML = rows;
        }
    })
}

displayData();

let filterByPlace = () => {
    getData().then(result => {
        let rows = '';
        let tbody = document.getElementById('AFZTable');
        let val = document.getElementById('place').value.toLowerCase();
        let afz = result.afzs;

        for (let i = 0; i < afz.length; i++) {
            if (afz[i].place.includes(val)) {
                rows += `<tr>
                            <td>${afz[i].name}</td>
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
