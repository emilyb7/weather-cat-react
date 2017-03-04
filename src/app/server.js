'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const env2 = require('env2');

env2('./config.env');

const server = new Hapi.Server();


server.register([Inert], (err) => {

  server.connection({ port: process.env.PORT || 3000, });

  server.route(require('./routes.js'));

  server.start(() => { console.log((`Server running at: ${server.info.uri}`)); })

});
