const Countries = require('./models/countries.js');
const CountriesSelectView = require('./views/countries_select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const select = document.querySelector('#countries');
  const countriesSelectView = new CountriesSelectView(select);
  countriesSelectView.bindEvents();

  const countries = new Countries();
  countries.getData();
  countries.bindEvents();




});
