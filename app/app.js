import React from 'react';
import { RouteHandler, Link } from 'react-router';
import Navigation from 'components/navigation';

/**
 * App component which houses all the child routes.
 * @class AppComponent
 */
const App = React.createClass({
	propTypes: {
		params: React.PropTypes.object.isRequired,
		query: React.PropTypes.object.isRequired
	},
	render() {
		return (
			<div>
					<Navigation />
					<RouteHandler {...this.props} />
			</div>
		);
	}
});

module.exports = App;
