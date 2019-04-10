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


module.exports = Countries;
