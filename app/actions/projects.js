'use strict';
import ProjectsApi from 'api/projects';

class ProjectActions {
	constructor() {
		this.generateActions('fetchSuccess');
	}

	fetch() {
		const self = this;
		const projectsApi = new ProjectsApi();

		const request = (resolve, reject) => {
			projectsApi.getProjects().then((response) => {
				this.actions.fetchSuccess(response.data);
				return resolve();
			}).catch((err) => {
				return reject(err);
			});
		};

		this.alt.resolve(request);
	}
}

export default ProjectActions;
