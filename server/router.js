'use strict';

var Router = require('react-router');
var routes = require('routes');
var Flux = require('utils/flux');

module.exports = function (req, res) {
	var router = Router.create({
		routes: routes,
		location: req.originalUrl
	});

	var flux = new Flux();

	router.run(function(handler, state) {
		flux.render({handler: handler, state: state}).then(function(html) {
			res.render('index', {
				content: html.body,
				PROD: process.env.NODE_ENV
			});
		});
	});
};
