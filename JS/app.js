document.addEventListener('DOMContentLoaded', ()=> {
    getData();
})

const URL = ('https://restcountries.eu/rest/v2/all')

const getData = async function () {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
}
