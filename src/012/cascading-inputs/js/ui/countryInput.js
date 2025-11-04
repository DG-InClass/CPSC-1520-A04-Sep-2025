import { fetchCountryNamesAsync } from '../data/fetchCountries';
const noSelectionOption = '<option value="">[select a region]</option>';

export async function setupCascadingUserInputs({
    countryDataList,
    countryInput,
    hiddenInput,
    cityDataList,
    stateContainer,
    stateSelect
}) {
    // A) Get short info on all the countries
    const data = await fetchCountryNamesAsync();
    console.log(data);
    // B) Populate the countryDataList with <option>s
    data.forEach(country => {
        let option = `<option value="${country.alpha3Code}">${country.name}</option>`;
        countryDataList.innerHTML += option;
    });
    // C) Listen for the 'input' event on the countryInput
    setUpListener({countryInput, hiddenInput, cityDataList, stateContainer, stateSelect, countries: data});
}

const setUpListener = function({countryInput, hiddenInput, cityDataList, stateContainer, stateSelect, countries}) {
    // A) Listen for the 'input'
    countryInput.addEventListener('change', function(evt) {
        evt.preventDefault();
        let text = evt.target.value; // <input />
        let matchingCountry = countries.find(country => country.alpha3Code === text);
        let found = !!matchingCountry; // force conversion to boolean from truthy/falsy
        if(!found) {
            // perhaps they just finished typing the country name....
            matchingCountry = countries.find(country => country.name === text);
            found = !!matchingCountry;
        }

        if(!found) {
            // alert('that is not a valid country');
            // TODO: set styling to indicate bad input
            evt.target.focus(); // refocus user input to this control
        } else {
            console.log('Found this match', matchingCountry);
            // 1) Move the code info to the hidden input
            hiddenInput.value = countryName.alpha3Code;
            // 2) Replace the visible input with the country name
            evt.target.value = countryName.name;
        }
    })
}
