const PubSub = require('../helpers/pub_sub.js');

const CountriesInfoView = function(container){
  this.container = container;
};

CountriesInfoView.prototype.bindEvents = function() {
    PubSub.subscribe('Countries:selected-country-data', (evt) => {
      this.render(evt.detail);
    });
};

CountriesInfoView.prototype.clear = function(element) {
  element.innerHTML = '';
};

CountriesInfoView.prototype.addHeading = function(headingText) {
  const heading = document.createElement('h3');
  heading.textContent = headingText;
  this.container.appendChild(heading);
};

CountriesInfoView.prototype.render = function(countryData) {
  this.clear(this.container);
  this.addHeading(countryData.name);
};

module.exports = CountriesInfoView;
