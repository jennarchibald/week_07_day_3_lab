const PubSub = require('../helpers/pub_sub.js');

const CountriesSelectView = function(select){
  this.select = select;
};

CountriesSelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:data-ready', (evt) => {
    console.log(evt.detail);
    this.populate(evt.detail);
  });
};

CountriesSelectView.prototype.populate = function (data) {
  data.forEach((country, index) =>{
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.select.appendChild(option);
  });
};

module.exports = CountriesSelectView;
