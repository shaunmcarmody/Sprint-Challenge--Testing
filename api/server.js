const express = require('express');
const server = express();

const games = require('../games/games.route.js');

server.use(express.json());

server.use('/', games);

module.exports = server;