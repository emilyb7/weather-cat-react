'use strict';

const server = require('./server.js');

server.start((err) => {
  if (err) console.log(err);
  console.log(`server running on ${server.info.uri}`);
});
