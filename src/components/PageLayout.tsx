import React, { FunctionComponent } from 'react'

import Projects from './modules/Projects';
import Slider from './modules/Slider';
import Text from './modules/Text';


interface PageLayoutProps {
	content: any
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ content }) => {
	const renderModules = ({ __typename, id, ...el }: any) => {
		switch(__typename) {
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

	return content?.map(renderModules) ?? null;
}

export default PageLayout;
