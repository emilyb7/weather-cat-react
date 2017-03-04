const land = require('./land.js');
const update = require('./update.js');

module.exports = [
  { method: 'GET', path: '/', handler: (_, reply) => { reply.file('./index.html') }},
  { method: 'GET', path: '/{path*}', handler: { directory: { path: './public' }}},
  { method: 'GET', path: '/land', handler: land, },
  { method: 'GET', path: '/update', handler: update, },
];
