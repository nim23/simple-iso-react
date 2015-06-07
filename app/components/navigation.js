import React from 'react';
import { Link } from 'react-router';

/**
 * Navigation component for the app
 * Info: If you declare a <Link> component, for which no route has been defined,
 * react-router will throw an error.
 * @class NavigationComponent
 */
const Navigation = React.createClass({
	render() {
		return (
				<ul>
					<li>
						<Link to='project' path='/project'>
							Projects
						</Link>
					</li>
				</ul>
		);
	}
});

export default Navigation;
