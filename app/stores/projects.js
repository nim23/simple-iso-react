'use strict';

class ProjectStore {
	constructor() {
		this.bindActions(this.alt.getActions('projects'));
		this.projects = [];
	}

	onFetchSuccess(projects) {
		return this.setState({ projects });
	}
}

export default ProjectStore;
