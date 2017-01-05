'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const Vision = require('vision');
const Server = new Hapi.Server();
const routes = require('./routes.js');
const env2 = require('env2');
env2('./config.env');

Server.connection({
  port: process.env.PORT || 3000,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '../../public')
    }
  }
});

Server.register([Inert, Vision], (err) => {
  if (err) console.log(err);
  Server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: '../../'
  });

  Server.route(routes);
});

module.exports = Server;
