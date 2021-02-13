import React, { FunctionComponent } from 'react'

import Facts from './modules/Facts';
import Projects from './modules/Projects';
import Slider from './modules/Slider';
import Stage from './modules/Stage';
import Text from './modules/Text';


interface PageLayoutProps {
	content: any
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ content }) => {
	const renderModules = ({ __typename, id, ...el }: any) => {
		switch(__typename) {
			case 'ContentfulLayoutFakten':
				return <Facts key={id} {...el} />
			case 'ContentfulLayoutProjekte':
				return <Projects key={id} {...el} />;
			case 'ContentfulLayoutSlider':
				return <Slider key={id} {...el} />;
			case 'ContentfulLayoutStage':
				return <Stage key={id} {...el} />;
			case 'ContentfulLayoutText':
				return <Text key={id} {...el} />;
			default:
				throw new Error(`Unkown content element '${__typename}'`);
		}
	};

	return content?.map(renderModules) ?? null;
}

export default PageLayout;
