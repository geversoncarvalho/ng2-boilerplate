var express = require('express');
var app = express();
var morgan = require('morgan');
 
 app.use(morgan('short'));
app.use(express.static('build'), function(req, res, next) {
	next();
});
var server = app.listen(5000);