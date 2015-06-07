'use strict';
const router = require('express').Router();

router
	.get('/project', function (req, res, next) {
		res.json([
			{
				"title": "Sponsor Education"
			},
			{
				"title": "Sponsor Hospital"
			}]);
	});

module.exports = router;
