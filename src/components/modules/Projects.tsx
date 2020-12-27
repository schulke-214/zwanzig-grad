import React, { FunctionComponent } from 'react'

import { common } from 'lib/module-styles';


interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
	return (
		<div css={common}>
			{"<Projects>"}
		</div>
	);
}

export default Projects;
