var express = require('express');
//var fortune = require('./lib/fortune.js');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
	res.render('home');
});

app.listen(app.get('port'));