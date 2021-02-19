import { graphql } from 'gatsby';

import {CMSContentModule, CMSResponsiveImage} from 'data/cms';


export type Layout = {
	showTitle: boolean;
	content: [LayoutElement]
};

export type LayoutElement = LayoutModuleTextImage | LayoutModuleText | LayoutModuleSlider | LayoutModuleFacts | LayoutModuleProjects | LayoutModuleStage;

export type LayoutModuleTextImage = CMSContentModule & {
	image: CMSResponsiveImage;
	text: LayoutModuleText;
};

export type LayoutModuleText = CMSContentModule & {
	isSmall: boolean;
	text: {
		json: string;
	};
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
		showTitle
		content {
			...LayoutBildText
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

		isSmall
		text {
			json
		}
	}

	fragment LayoutBildText on ContentfulLayoutBildText {
		__typename
		id

		image {
			...CMSImage
		}

		text {
			...LayoutText
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
			...CMSImage
		}
	}
`;
