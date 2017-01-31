//const ipRequest = require('./request-ip.js');
const waterfall = require('./waterfall.js');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.view('index')
    }
  },
  {
    method: 'GET',
    path: '/{path*}',
    handler: {
      directory: {
        path: '.'
      }
    }
  },
  {
    method: 'GET',
    path: '/land',
    handler: (request, reply) => {
      var ip = request.headers['x-forwarded-for'] || request.info.remoteAddress;
      console.log('IP: ' + ip);
      let city = request.query.city;
      let lat = request.query.lat;
      let lon = request.query.lon;
      waterfall.land({
        city: city,
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
  },
  {
    method: 'GET',
    path: '/update',
    handler: (request, reply) => {
      let lat = request.query.lat;
      let lon = request.query.lon;
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
  }
];
