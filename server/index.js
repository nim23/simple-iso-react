var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var router = require('./router');
var api = require('../api/app');

// var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

app.engine('html', cons.lodash);

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/assets', express.static(path.join(__dirname, '../app/assets')));
app.use('/build', express.static(path.join(__dirname, '../app/build')));

app.use('/api', api);

app.use('/', router);

module.exports = app;
