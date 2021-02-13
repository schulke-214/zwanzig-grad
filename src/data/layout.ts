import { graphql } from 'gatsby';

import {CMSContentModule, CMSResponsiveImage} from 'data/cms';


export type Layout = {
	content: [LayoutElement]
};

export type LayoutElement = LayoutModuleText | LayoutModuleSlider | LayoutModuleFacts | LayoutModuleProjects | LayoutModuleStage;

export type LayoutModuleText = CMSContentModule & {
	text: {
		json: string;
	}
};

export type LayoutModuleSlider = CMSContentModule & {
	showTitle: boolean;
	title: string;
	images: CMSResponsiveImage[];
};

export type LayoutModuleFacts = CMSContentModule & {
	id: string;
	headline: string;
	facts: [{
		id: string;
		description: string;
	}];
};

export type LayoutModuleProjects = CMSContentModule & {
	filter: boolean;
	sortBy: string;
	order: string;
};

export type LayoutModuleStage = CMSContentModule & {
	staticText: string;
	connection: string;
	buzzWords: string[];
	background: CMSResponsiveImage;
};

export const Layout = graphql`
	fragment Layout on ContentfulLayout {
		content {
			...LayoutFacts
			...LayoutSlider
			...LayoutStage
			...LayoutText
			...LayoutProjects
		}
	}

	fragment LayoutText on ContentfulLayoutText {
		__typename
		id
		text {
			json
		}
	}

	fragment LayoutSlider on ContentfulLayoutSlider {
		__typename
		id
		showTitle
		title
		images {
			...CMSImage
		}
	}

	fragment LayoutFacts on ContentfulLayoutFakten {
		__typename
		id
		headline
		facts {
			id
			description
		}
	}

	fragment LayoutProjects on ContentfulLayoutProjekte {
		__typename
		id
		filter
		sortBy
		order
	}

	fragment LayoutStage on ContentfulLayoutStage {
		__typename
		id
		staticText
		connection
		buzzWords
		background {
			id
			title
			mobile: resize(height: 540, width: 960, quality: 80, resizingBehavior: FILL) {
				src
			}
			desktop: resize(height: 1080, width: 1920, quality: 90, resizingBehavior: FILL) {
				src
			}
		}
	}
`;
