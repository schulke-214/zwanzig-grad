import React, { FunctionComponent } from 'react'

import Employees from 'components/modules/Employees';
import Facts from 'components/modules/Facts';
import Projects from 'components/modules/Projects';
import Slider from 'components/modules/Slider';
import Stage from 'components/modules/Stage';
import TeaserGroup from 'components/modules/TeaserGroup';
import Text from 'components/modules/Text';
import Title from 'components/modules/Title';

import { LayoutElement } from 'data/layout';
import { Page, Subpage } from 'data/page';


interface PageLayoutProps {
	page: Page | Subpage;
}

const PageLayout: FunctionComponent<PageLayoutProps> = ({ page }): any => {
	const renderModules = ({ __typename, id, ...el }: LayoutElement) => {
		switch(__typename) {
			case 'ContentfulLayoutTeaserGruppe':
				return <TeaserGroup key={id} {...el as any} />;
			case 'ContentfulLayoutMitarbeiter':
				return <Employees key={id} {...el as any} />;
			case 'ContentfulLayoutFakten':
				return <Facts key={id} {...el as any} />;
			case 'ContentfulLayoutProjekte':
				return <Projects key={id} {...el as any} />;
			case 'ContentfulLayoutSlider':
				return <Slider key={id} {...el as any} />;
			case 'ContentfulLayoutStage':
				return <Stage key={id} {...el as any} />;
			case 'ContentfulLayoutText':
				return <Text key={id} {...el as any} desktopColumns={2} />;
			default:
				throw new Error(`Unkown content element '${__typename}'`);
		}
	};

	const elements = page.layout.content.map(renderModules);

	if (page.layout.showTitle) {
		elements.unshift((
			<Title key={page.metadata.slug} subtitle={page.subtitle}>{page.title}</Title>
		));
	}

	return elements;
}

export default PageLayout;
