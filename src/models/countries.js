const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Countries = function () {
  this.data = null;
};

Countries.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');
  requestHelper.get( (data) => {
    this.data = data;
    PubSub.publish('Countries:data-ready', this.data);
  });
};

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('CountriesSelectView:country-chosen', (evt) => {
    this.publishCountryData(evt.detail);
  });
};


Countries.prototype.publishCountryData = function (index) {
  const selectedCountry = this.data[index];
  PubSub.publish('Countries:selected-country-data', selectedCountry);
};


module.exports = Countries;
