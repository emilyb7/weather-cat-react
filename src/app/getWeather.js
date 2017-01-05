const Request = require('request');
const helpers = require('./helpers');
const env = require('env2')('./config.env');
const apiid = process.env.APIID;

const getWeather = (object, cb) => {
  console.log(apiid);
  // object consists of location details -- lat, lon, city
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${object.lat}&lon=${object.lon}&units=metric&APPID=${apiid}`;
  Request(url, (err, response, body) => {
    if (err) {
      cb(err);
    } else {
      var apiResponse = JSON.parse(body);
      const responseObject = {
        location: object,
        weather: {
          temp: helpers.formatTemp(apiResponse.main.temp),
          type: helpers.formatType(apiResponse.weather[0].description),
          cloudCover: apiResponse.clouds.all,
          sunrise: apiResponse.sys.sunrise,
          sunset: apiResponse.sys.sunset
        }
      }
      cb(null, responseObject)
    }
  })
}

module.exports = getWeather;
