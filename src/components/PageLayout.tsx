import React, { FunctionComponent } from 'react'

import Accordion from './modules/Accordion';
import Container from './modules/Container';
import Projects from './modules/Projects';
import Slider from './modules/Slider';
import Text from './modules/Text';


interface PageLayoutProps {
	content: any
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ content }) => {
	const renderModules = ({ __typename, id, ...el }: any) => {
		switch(__typename) {
			case 'ContentfulLayoutAccordion':
				return <Accordion key={id} {...el} />;
			case 'ContentfulLayoutContainer':
				return <Container key={id} {...el} />
			case 'ContentfulLayoutProjekte':
				return <Projects key={id} {...el} />;
			case 'ContentfulLayoutSlider':
				return <Slider key={id} {...el} />
			case 'ContentfulLayoutText':
				return <Text key={id} {...el} />;
			default:
				throw new Error(`Unkown content element '${__typename}'`);
		}
	};

	return content.map(renderModules);
}

export default PageLayout;
