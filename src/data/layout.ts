import { graphql } from 'gatsby';

import { CMSContentModule, CMSResponsiveImage } from 'data/cms';
import { Employee as EmployeeType } from 'data/employee'
import { ProjectType } from 'data/project';


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
		json: Object;
	};
};

export type LayoutModuleEmployees = CMSContentModule & {
	employees: EmployeeType[]
};

export type LayoutModuleSlider = CMSContentModule & {
	showTitle: boolean;
	title: string;
	images: CMSResponsiveImage[];
};

export type LayoutModuleFacts = CMSContentModule & {
	id: string;
	chapterHeadline: string;
	headline: string;
	facts: [{
		id: string;
		icon: {
			description: string;
			file: {
				url: string;
			};
		};
		description: {
			json: Object;
		};
	}];
};

export type LayoutModuleProjects = CMSContentModule & {
	filter: boolean;
	sortBy: string;
	order: string;
	type: ProjectType | 'Alle';
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
			...LayoutEmployees
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

	fragment LayoutEmployees on ContentfulLayoutMitarbeiter {
		__typename
		id

		employees {
			...Employee
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
		chapterHeadline
		headline
		facts {
			id
			icon {
				description
				file {
					url
				}
			}
			description {
				json
			}
		}
	}

	fragment LayoutProjects on ContentfulLayoutProjekte {
		__typename
		id

		filter
		sortBy
		order
		type
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
