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
  this.addTextElement('h2', countryData.name, this.container);
  this.addFlagImage(countryData);
  const div = this.addDiv();
  this.addTextElement('h3', "Region:", div);
  this.addTextElement('p',countryData.region, div);
  this.addTextElement('h3', 'Languages:', div);
  const list = this.addUnorderedListElement(div);
  this.addListItemsToList(list, countryData.languages);
};

CountriesInfoView.prototype.clear = function(element) {
  element.innerHTML = '';
};

CountriesInfoView.prototype.addDiv = function() {
  const div = document.createElement('div');
  div.id = 'countries-text';
  this.container.appendChild(div);
  return div;
}

CountriesInfoView.prototype.addTextElement = function(element, elementText, parentElement) {
  const newElement = document.createElement(element);
  newElement.textContent = elementText;
  parentElement.appendChild(newElement);
  console.log(`adding ${element} to ${parentElement.id}`);
};

CountriesInfoView.prototype.addFlagImage = function (countryData) {
  const image = document.createElement('img');
  image.src = countryData.flag;
  image.alt = `Flag of ${countryData.name}`;
  image.title = `Flag of ${countryData.name}`;
  this.container.appendChild(image);
};

CountriesInfoView.prototype.addUnorderedListElement = function (div) {
  const newUnorderedList = document.createElement('ul');
  div.appendChild(newUnorderedList);
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
