async function getData() {
    let api = '/data/cinema.json';
    let apiDataResponse = await fetch(api);
    let data = await apiDataResponse.json();
    return {
        afzs: data
    }
}

let displayList = () => {
    getData().then(result => {
        let rows = '';
        let tbody = document.getElementById('CinemaTable');
        let afz = result.afzs;
        for (let i = 0; i < afz.length; i++) {
            rows += `<tr>
                       <td style="vertical-align: bottom;">${afz[i][3]} <br/>`;
            rows += `
                       </td>
                     </tr>`;

            tbody.innerHTML = rows;
        }
    })
}

displayList();
