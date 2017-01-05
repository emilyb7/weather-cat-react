const helpers = require('./helpers.js');

const isDaylight = (sunrise, sunset) => {
  let t = (Math.floor(Date.now())) / 1000;
  return t > sunrise && t < sunset;
}

const getWarmColor = temp => {
  const warmest = [ 244, 206, 66 ];
  const coldest =  [ 66, 170, 244 ];
  const degree = temp > 25 ? 100 : temp < -5 ? 0 : (100 / 30) * (temp + 5);
  let result = warmest.map((x, i) => {
    let diff = x - coldest[i];
    let addTo = (diff / 100) * degree;
    return Math.round(coldest[i] + addTo);
  });
  console.log(result);
  return result;
}

const daylightColor = isDaylight => isDaylight ? "RGBA(15,255,255,1)" : "RGBA(51,2,102,1)";

const backgroundColors = (obj, cb) => {
  // obj contains location, weather, gif
  let temp = parseInt(obj.weather.temp.match(/\d+/)[0]);
  let sunrise = obj.weather.sunrise;
  let sunset = obj.weather.sunset;
  let topColor = helpers.rgbColor(getWarmColor(temp));
  let bottomColor = daylightColor(isDaylight(sunrise, sunset));
  let responseObject = {
    location: obj.location,
    weather: obj.weather,
    gif: obj.gif,
    colors: {
      topColor: topColor,
      bottomoColor: bottomColor
    }
  };
  cb(null, responseObject);
}

module.exports = backgroundColors;
