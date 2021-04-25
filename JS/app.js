const URL = ('https://restcountries.eu/rest/v2/all')
const countriesContainer = document.querySelector('.countries_container');
const template = document.querySelector('template');

document.addEventListener('DOMContentLoaded', ()=> {
    getData();
})

function copyTemplate(country) {
    const countryTemplate = document.importNode(template.content, true);
    const article = countryTemplate.querySelector('article');

    const img = article.querySelector('img');
    img.setAttribute('src', `${country.flag}`);

    const name = article.querySelector('strong');
    name.innerText = country.name;

    const population = article.querySelector('#population');
    population.innerText = `Population: ${country.population}`;

    const region = article.querySelector('#region');
    region.innerText = `Región: ${country.region}`;

    const capital = article.querySelector('#capital');
    capital.innerText = `Capital: ${country.capital}`;

    return article;
}

const getData = async function () {
    const res = await fetch(URL);
    const countries = await res.json();
    countries.forEach(country => {
        const node = copyTemplate(country);
        countriesContainer.appendChild(node);
    });
}


