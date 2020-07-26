import React, { FunctionComponent } from 'react'


interface PageLayoutProps {
	content: any
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ content }) => {
	console.log(content)

	const renderModules = ({ __typename, id, ...el }: any) => {
		switch(__typename) {
			case 'ContentfulLayoutAccordion':
				return <p key={id}>ACCORDION</p>;
			case 'ContentfulLayoutContainer':
				return <p key={id}>CONTAINER</p>;
			case 'ContentfulLayoutProjects':
				return <p key={id}>PROJECTS</p>;
			case 'ContentfulLayoutSlider':
				return <p key={id}>SLIDER</p>;
			case 'ContentfulLayoutText':
				return <p key={id}>TEXT</p>;
			default:
				throw new Error(`Unkown content element '${__typename}'`);
		}
	};

	return content.map(renderModules);
}

export default PageLayout;
