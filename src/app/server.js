'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const Server = new Hapi.Server();
const routes = require('./routes.js');
const env2 = require('env2');

env2('./config.env');

const server = new Hapi.Server();


server.register([Inert], (err) => {

  server.connection({ port: process.env.PORT || 3000, });

  server.route(require('./routes.js'));

  server.start(() => { console.log((`Server running at: ${server.info.uri}`)); })

});
