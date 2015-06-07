'use strict';

import axios from 'axios';
import Api from './Api';

class ProjectsApi extends Api {
	constructor() {
		super();
	}

	/**
	 * Get Projects
	 * @return {Object} Promise
	 */
	getProjects() {
		return axios.get(this.API_ENDPOINT + '/project');
	}

	/**
	 * Post Projects
	 * @return {Object} Promise
	 */
	postProject() {
		return axios.post(this.API_ENDPOINT + '/project');
	}
}

export default ProjectsApi;
