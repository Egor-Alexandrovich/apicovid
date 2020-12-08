import './scss/main.scss';
import { getCovid19Info } from './js/main.js';
import { getFlag } from './js/getFlag';


async function unit() {
    const data = await getCovid19Info();
    const dataFlag = await getFlag();
    console.log(data);
    console.log(dataFlag);
    const table = document.body.querySelector('.table');
    const spisok = document.body.querySelector('.spisok');
    const spisokHead = spisok.previousElementSibling;
    const head = table.previousElementSibling;
    head.innerHTML = `Global Deaths <span>${data.Global.TotalDeaths}</span>`;
    spisokHead.innerHTML = `Global Cases <span>${data.Global.TotalConfirmed}</span>`;
    data.Countries.forEach(element => {
        const {Country, TotalConfirmed, TotalDeaths, TotalRecovered, CountryCode} = element;
        // const {Country: country, TotalConfirmed: totalConfirmed, TotalDeaths: totalDeaths, TotalRecovered:totalRecovered, CountryCode: countryCode} = element;
        const html = `<li>
        <span>${Country}</span>
        <span>${TotalConfirmed}</span>
        <span>${TotalDeaths}</span>
        <span>${TotalRecovered}</span>
      </li>`
      table.insertAdjacentHTML('beforeend', html);
      const [des3] = dataFlag.filter(el => el.alpha2Code === CountryCode);
      const src = des3 ? des3.flag : null;
      spisok.insertAdjacentHTML('beforeend', `<li>
      <img src ="${src}">
      <span>${Country}</span>
      <span>${TotalConfirmed}</span>
    </li>`)
    });
}
unit();
