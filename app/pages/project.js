'use strict';

import React from 'react';
import ListenerMixin from 'alt/mixins/ListenerMixin';

/**
 * Project  Project page
 * @class Project
 */
const ProjectPage = React.createClass({
	mixins: [ListenerMixin],
	contextTypes: {
		router: React.PropTypes.func
	},
	propTypes: {
		flux: React.PropTypes.object.isRequired
	},
	getInitialState() {
		return this.props.flux.getStore('projects').getState();
	},
	componentDidMount() {
		this.listenTo(this.props.flux.getStore('projects'), this.hndlStoreChange);
	},
	componentWillMount() {
		return this.props.flux.getActions('projects').fetch();
	},
	hndlStoreChange() {
		this.setState(this.getInitialState());
	},
	renderProjects() {
		return this.state.projects.map((project, index) => {
			return <div key={index}>{ project.title }</div>;
		});
	},
	render() {
		return <div className="container">{ this.renderProjects() }</div>;
	}
});

export default ProjectPage;
