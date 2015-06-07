class Api {
	constructor() {

	if (process.env.BROWSER) {
		this.API_ENDPOINT = '/api';
		return;
	}

	if (process.env.NODE_ENV === 'prod') {
		//TODO: update this when we have a prod environment
		this.API_ENDPOINT = 'http://localhost:11000/api';
		return;
	}

	this.API_ENDPOINT = 'http://localhost:11000/api';
	}
}

export default Api;
