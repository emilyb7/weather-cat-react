const waterfall = require('./waterfall.js');

module.exports = (request, reply) => {
  const lat = request.query.lat;
  const lon = request.query.lon;
  waterfall.update({
    lat: lat,
    lon: lon
  }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      reply(data);
    }
  })
}
