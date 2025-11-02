# Fetching JSON Data

In this demo, we will be using the browser's [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) method to get JSON data to support our Address Input form.

## Cascading Inputs/Dropdowns

> Country/State/City Selections

In this example, we will support cascading user inputs for where they live. We will also 

1. It all begins with selecting the country. To ensure that an actual country is selected, we will simplify their input with suggested matches for their country name.
1. Once the country is selected, we can pre-populate the options for known cities in that country.
1. After that, we will add a drop-down with the states/provinces within that country. (We don't have known data about which state contains the user's town/city; that's just too much world information we would have to track down.)

## Inputs and DataLists

One of the cool items about the `<input>` element is that we can pair it with a `<datalist>` tag that contains `<option>` entries as potential pre-defined input that the user can select from.

> ***TODO:** Read this post on [A Comprehensive Guide to Using the HTML `<datalist>` Element](https://juniordev4life.com/posts/comprehensive-guide-to-using-the-html-datalist-element/)

One of the downsides, however, is that if your `<option>` entries have `value` attributes, it is that *value* which is put into the `<input>` rather than the display text of the `<option>` tag.

The way to get around that involves a combination of JavaScript, events (particularly the [`'input'` event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event)), and the use of `<input type="hidden">` elements.

### Bing AI

To show a description in the dropdown of a <datalist> but submit the actual value, you can use a combination of JavaScript and HTML. The idea is to display a user-friendly description in the dropdown while storing the actual value in a hidden field or the input itself.

Here's an example:

> HTML and JavaScript Solution
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datalist with Descriptions</title>
</head>
<body>
  <form id="myForm">
    <label for="item">Choose an item:</label>
    <input type="text" id="item" list="itemList" autocomplete="off" placeholder="Select an item">
    <datalist id="itemList">
      <option data-value="1" value="Apple - A sweet fruit"></option>
      <option data-value="2" value="Banana - A yellow fruit"></option>
      <option data-value="3" value="Carrot - A healthy vegetable"></option>
    </datalist>
    <input type="hidden" id="itemValue" name="itemValue">
    <button type="submit">Submit</button>
  </form>

  <script>
    const input = document.getElementById('item');
    const hiddenInput = document.getElementById('itemValue');
    const datalist = document.getElementById('itemList');

    input.addEventListener('input', () => {
      const options = datalist.options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].value === input.value) {
          hiddenInput.value = options[i].dataset.value; // Store the actual value
          break;
        }
      }
    });

    document.getElementById('myForm').addEventListener('submit', (e) => {
      e.preventDefault();
      alert(`Submitted Value: ${hiddenInput.value}`);
    });
  </script>
</body>
</html>
```

#### How It Works


**HTML Structure:**

The <datalist> contains <option> elements with a data-value attribute for the actual value and a value attribute for the description.
The input field is linked to the <datalist> using the list attribute.



**JavaScript Logic:**

When the user selects an option, the script checks the value of the input against the value of each <option>.
If a match is found, the data-value of the matching <option> is stored in a hidden input field (itemValue).



**Form Submission:**

The hidden input (itemValue) ensures the actual value is submitted, while the user sees the description in the dropdown.



This approach keeps the user experience intuitive while maintaining the integrity of the submitted data.


----


















----

## Source Data

The sources of JSON data will include

- [Cached data](./cached/ReadMe.md) within the domain of this website
- [https://countriesnow.space/](https://countriesnow.space/) - Various APIs for countries, their states and cities
- [https://mledoze.github.io/countries/](https://mledoze.github.io/countries/) - `mledoze` provides a [GitHub repo](https://github.com/mledoze/countries) where he hosts [lots of data](#mledoz-data) on countries, including geo data. His latest data is 5.1.0 as of Feb, 2025.
    - A good example of making this data searchable is on [https://countries.petethompson.net/](https://countries.petethompson.net/)
- mledoz also notes as one of his sources [https://github.com/countries/countries](https://github.com/countries/countries), which contains extensive amounts of data.
  - > "All sorts of useful information about every country packaged as convenient little country objects. It includes data from ISO 3166 (countries and states/subdivisions ), ISO 4217 (currency), and E.164 (phone numbers)."
- 

----

## mledoz Data

> The following subsections are from his repo.

### Countries data
This repository contains a list of world countries, as defined by [ISO Standard 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1),
in JSON, CSV, XML and YAML. **Warning:** not all entities in this project are independent countries; refer to the `independent` property to know if the country is considered a sovereign state.

Each line contains the country:

 - `name`
 	 - `common` - common name in english
 	 - `official` - official name in english
 	 - `native` - list of all native names
 	 	- key: three-letter ISO 639-3 language code
	 	- value: name object
	 		- key: `official` - official name translation
	 		- key: `common` - common name translation
 - country code top-level domain (`tld`)
 - code ISO 3166-1 alpha-2 (`cca2`)
 - code ISO 3166-1 numeric (`ccn3`)
 - code ISO 3166-1 alpha-3 (`cca3`)
 - code International Olympic Committee (`cioc`)
 - ISO 3166-1 independence status (`independent`) (denotes the country is considered a sovereign state)
 - ISO 3166-1 assignment status (`status`)
 - UN Member status (`unMember`)
 - [UN Regional Group](https://en.wikipedia.org/wiki/United_Nations_Regional_Groups) (`unRegionalGroup`)
 - `currencies` - list of all currencies
 	- key: ISO 4217 currency code
 	- value: currency object
 		- key: `name` name of the currency
 		- key: `symbol` symbol of the currency
 - International Direct Dialing info (`idd`)
 	- `root` - the root geographical code prefix. e.g. +6 for New Zealand, +4 for UK.
 	- `suffixes` - list of all suffixes assigned to this country. 4 for NZ, 809, 829, and 849 for Dominican Republic.
 - capital city(ies) (`capital`)
 - alternative spellings (`altSpellings`)
 - region
 - subregion
 - list of official languages (`languages`)
 	- key: three-letter ISO 639-3 language code
 	- value: name of the language in english
 - list of name translations (`translations`)
 	- key: three-letter ISO 639-3 language code
 	- value: name object
 		- key: official - official name translation
 		- key: common - common name translation
 - latitude and longitude (`latlng`)
 - `demonyms` - name of residents, translated & genderized
    - key: three-letter ISO 639-3 language code
	- value: genderized demonym object
		- key: `f` (female) or `m` (male)
		- value: genderized demonym translation
 - landlocked status (`landlocked`)
 - land borders (`borders`)
 - land area in km² (`area`)
 - emoji flag (`flag`)
 - calling codes (`callingCodes`)

#### Additional data
The [data](https://github.com/mledoze/countries/tree/master/data) folder contains additional data such as the countries
GeoJSON outlines and flags in SVG format.
