'use strict';

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
import App from 'app';

/**
 * Top level routes for the application. Add routes for additional
 * pages here. Not sure about nested routes but we can figure that
 * out as we go along as it is supported. Also look in (./components/navigation.js)
 * For more info: http://rackt.github.io/react-router/
 */
const routes = (
	<Route name='app' path='/' handler={ App }>
		<DefaultRoute name='project' handler={ require('./pages/project') } />
	</Route>
);

export default routes;
