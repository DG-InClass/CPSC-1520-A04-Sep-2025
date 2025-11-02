// TODO: Style a bit
// import '@picocss/pico/css/pico.amber.min.css'; 
// import '@picocss/pico/css/pico.blue.min.css'; 
// import '@picocss/pico/css/pico.green.min.css'; 
// import '@picocss/pico/css/pico.grey.min.css'; 
// import '@picocss/pico/css/pico.slate.min.css';
// import '@picocss/pico/css/pico.orange.min.css'; 
// import '@picocss/pico/css/pico.purple.min.css'; 

// prep the page with data
const baseUrls = {
    restCountries: {
        about: "This project is inspired on restcountries.eu by Fayder Florez. Although the original project has now moved to a subscription base API, this project is still Open Source and Free to use",
        repo: "https://gitlab.com/restcountries/restcountries",
        asOf: "Oct 28, 2025",
        docs: "https://restcountries.com/",
        endpoints: {
            baseUrl: "https://restcountries.com/v3.1/all",
            filters: [
                { id: 0, description: "Name only", queryString: "fields=name", keyValue: { key: "fields", value: "name" } },
                { id: 1, description: "Name and flag", queryString: "fields=name,flag", keyValue: { key: "fields", value: "name,flag" } },
                { id: 2, description: "Name and region", queryString: "fields=name,region,subregion", keyValue: { key: "fields", value: "name,region,subregion" } },
                { id: 3, description: "Name and domain(s)", queryString: "fields=name,tld", keyValue: { key: "fields", value: "name,tld" } },
                { id: 4, description: "Name and codes", queryString: "fields=name,cca2,cca3", keyValue: { key: "fields", value: "name,cca2,cca3" } },
            ]
        }
    }
}
const getRestCountries = (filter = 2) => `${baseUrls.restCountries.endpoints.baseUrl}?${baseUrls.restCountries.endpoints.filters[filter]?.queryString}`;
const cachedCountries = './cached/countries.json';
const pain = 'https://www.apicountries.com/countries';
const getUrl = (cached = true) => cached ? cachedCountries : getRestCountries();
fetch(getUrl(), { mode: "no-cors", method: "GET" })
      // Your first .then() is where you "convert" your JSON to JS
      .then(handleResponse)
      // Your second .then() is where you use the JS data
      .then(logData)
      .then(populateCountryOptions)
      .catch(handleErr);

// fetch helper functions

function handleResponse(resp) {
    console.log(resp);
    // TODO: A proper handling of a response would validate for
    //          - an "ok" status (status code 200)
    //          - the expected mime type (in this case, "application/json")
    return resp.json();
}

function handleErr(err) {
    console.log(err);
}

function logData(data) {
    console.log(data);
    return data; // send it back out, unchanged, for future promises
}

/**
 * Processes a Promise<T> where the <T> is the data from the countries.json file.
 * @param {{name: string, value: string}[]} data These are just some of the properties on the cached countries.json data.
 */
function populateCountryOptions(data) {
    let countries = data.map(country => ({ name: country.name, value: country.alpha3Code }));
    let datalist = document.getElementById('countries');
    countries.forEach(dataItem => {
        datalist.innerHTML += `<option value="${dataItem.value}">${dataItem.name}</option>`;
    })
}


const allStatesEndpoint = 'https://countriesnow.space/api/v0.1/countries/states';
const allCountriesEndpoint = 'https://countriesnow.space/api/v0.1/countries';
const allCountriesAndCapitalEndpoint = 'https://countriesnow.space/api/v0.1/countries/capital';
const allCountriesAndGps = 'https://countriesnow.space/api/v0.1/countries/positions';



fetch(allCountriesEndpoint).then(handleResponse).then(data => {
    console.log('countriesnow Country + Cities:', data);
})

fetch(allStatesEndpoint).then(handleResponse).then(data => {
    console.log('countriesnow States:', data);
})
