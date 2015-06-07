import React from 'react';
import Iso from 'iso';
import ErrorPage from 'pages/error';

/**
 * Alt resolver is used for Isomorphic Rendering.
 */
class AltResolver {
	constructor() {
		this._toResolve = [];
	}

	resolve(promise, later = false) {
		if (process.env.BROWSER && !later) {
			return new Promise(promise);
		} else {
			this._toResolve.push(promise);
		}
	}

	mapPromises() {
		return this._toResolve.map((promise) => new Promise(promise));
	}

	async render({ handler: Handler, state }, flux, force = false) {
		if (process.env.BROWSER && !force) {
			return null;

		} else {

			let content;

			try {
				React.renderToString(<Handler {...state} flux={flux} />);
				const promises = this.mapPromises();
				await Promise.all(promises);
				const app = React.renderToString(<Handler {...state} flux={flux} />);
				content = { body: Iso.render(app, flux.flush()) };
			} catch (err) {
				const app = React.renderToString(React.createElement(ErrorPage));
				content = { body: Iso.render(app, flux.flush()) };
				console.log('Server render error:' + err); //Helpful for server side debugging
			}
			return content;
		}
	}
}

export default AltResolver;
