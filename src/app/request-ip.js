const Request = require('request');
const helpers = require('./helpers.js');

const ipRequest = (_, cb) => {
  Request('http://ip-api.com/json', (err, response, body) => {
    if (err) {
      cb(err);
    } else {
      let response = JSON.parse(body);
      let responseObject = {
        lat: response.lat,
        lon: response.lon,
        city: helpers.formatCity(response.city)
      };
      cb(null, responseObject);
    }
  })
}

module.exports = ipRequest;
