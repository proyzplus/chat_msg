var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser'); 

var indexRouter = require('./routes/index'); 

var app = express();

var http = require('http');
var server = http.createServer(app); 
 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); 
 

// module.exports = app;
server.listen('3000');
