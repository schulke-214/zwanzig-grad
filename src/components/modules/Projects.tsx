import React, { FunctionComponent } from 'react'

import ModuleContainer from 'components/generic/ModuleContainer';


interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
	return (
		<ModuleContainer>
			<div>
				{"<Projects>"}
			</div>
		</ModuleContainer>
	);
}

export default Projects;
