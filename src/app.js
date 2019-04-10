const Countries = require('./models/countries.js');
const CountriesSelectView = require('./views/countries_select_view.js');
const CountriesInfoView = require('./views/countries_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const select = document.querySelector('#countries');
  const countriesSelectView = new CountriesSelectView(select);
  countriesSelectView.bindEvents();

  const countries = new Countries();
  countries.getData();
  countries.bindEvents();

  const container = document.querySelector('#country');
  const countriesInfoView = new CountriesInfoView(container);
  countriesInfoView.bindEvents();






});
