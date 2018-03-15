'use strict';
const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

app.use(express.static(path.join(__dirname, 'dist')));

app.set('port', process.env.PORT || '3000');

const server = http.createServer(app);

server.listen(port, function () {
  console.log(`Running on localhost:${port}`);
});