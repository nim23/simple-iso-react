'use strict';

import Iso from 'iso';
import React from 'react';
import Router from 'react-router';
import Flux from 'utils/flux';

const bootstrap = () => {
	return new Promise((resolve) => {
		Iso.bootstrap((initialState, __, container) => {
			resolve({ initialState, __, container });
		});
	})
};

(async () => {

	const flux = new Flux();

	const boot = await bootstrap();
	flux.bootstrap(boot.initialState);

	const routes = require('routes');

	Router.run(
		routes,
		Router.HistoryLocation,
		(Handler, state) => {
			React.render(<Handler {...state} flux={ flux }/>, boot.container);
		}
	);

})();
