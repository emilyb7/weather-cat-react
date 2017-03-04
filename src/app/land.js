const waterfall = require('./waterfall.js');

module.exports = (request, reply) => {
  const ip = request.headers['x-forwarded-for'] || request.info.remoteAddress;
  const city = request.query.city;
  const lat = request.query.lat;
  const lon = request.query.lon;
  waterfall.land({
    city: city,
    lat: lat,
    lon: lon,
  }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      reply(data);
    }
  });
}
