const Request = require('request');

const getGiphy = (obj, cb) => {
  const keywords = `${obj.weather.type.split(' ').pop()} cat`;
  const url = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${keywords}`;
  Request(url, (error, response, body) => {
    if (error) { cb(error); }
    else {
      let apiResponse = JSON.parse(body);
      let gif = apiResponse.data.image_url;
      let responseObject = {
        location: obj.location,
        weather: obj.weather,
        gif: gif
      }
      cb(null, responseObject);
    }
  })
};

module.exports = getGiphy;
