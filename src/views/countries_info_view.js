const PubSub = require('../helpers/pub_sub.js');

const CountriesInfoView = function(container){
  this.container = container;
};

CountriesInfoView.prototype.bindEvents = function() {
    PubSub.subscribe('Countries:selected-country-data', (evt) => {
      this.render(evt.detail);
    });
};

CountriesInfoView.prototype.render = function(countryData) {
  this.clear(this.container);
  this.addTextElement('h2', countryData.name);
  this.addFlagImage(countryData);
  this.addTextElement('h3', "Region:");
  this.addTextElement('p',countryData.region)
  this.addTextElement('h3', 'Languages:')
  const list = this.addUnorderedListElement();
  this.addListItemsToList(list, countryData.languages);
};

CountriesInfoView.prototype.clear = function(element) {
  element.innerHTML = '';
};

CountriesInfoView.prototype.addTextElement = function(element, elementText) {
  const newElement = document.createElement(element);
  newElement.textContent = elementText;
  this.container.appendChild(newElement);
};

CountriesInfoView.prototype.addFlagImage = function (countryData) {
  const image = document.createElement('img');
  image.src = countryData.flag;
  image.alt = `Flag of ${countryData.name}`;
  image.title = `Flag of ${countryData.name}`;
  this.container.appendChild(image);
};

CountriesInfoView.prototype.addUnorderedListElement = function () {
  const newUnorderedList = document.createElement('ul');
  this.container.appendChild(newUnorderedList);
  return newUnorderedList;
};

CountriesInfoView.prototype.addListItemsToList = function (list, itemArray) {
  itemArray.forEach((language) => {
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  });
};


module.exports = CountriesInfoView;
