const express = require('express');
const parser = require('body-parser');

const api = express();
api.use(parser.json());

//routes
api.use(require('./routes/index'));

const puerto = 6000;
api.listen(puerto, function () {
	console.log('api-multiplicacion is running on port', puerto);
});

module.exports = api;
