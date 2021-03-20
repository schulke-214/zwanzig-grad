import { graphql } from 'gatsby';

import { CMSContentModule, CMSResponsiveImage, CMSRichText } from 'data/cms';
import { Employee as EmployeeType } from 'data/employee'
import { ProjectType } from 'data/project';


export type Layout = {
	showTitle: boolean;
	content: [LayoutElement]
};

export type LayoutElement = LayoutModuleTeaserGroup | LayoutModuleText | LayoutModuleSlider | LayoutModuleFacts | LayoutModuleProjects | LayoutModuleStage;

export type LayoutModuleTeaserGroup = CMSContentModule & {
	teaser: [{
		image: CMSResponsiveImage;
		text: LayoutModuleText;
	}]
};

export type LayoutModuleText = CMSContentModule & {
	isSmall: boolean;
	text: CMSRichText;
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
		icon: CMSResponsiveImage;
		description: CMSRichText;
	}];
};

export type LayoutModuleProjects = CMSContentModule & {
	type: ProjectType;
	filter: boolean;
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
			...LayoutTeaserGroup
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
			raw
			references {
				__typename
				... on ContentfulAsset {
					...CMSImage
				}
				... on ContentfulMetaLegalKontakt {
					city
					contentful_id
					email
					fax
					houseNumber
					landline
					legalName
					mobile
					name
					owner
					postalCode
					street
				}
			}
		}
	}

	fragment LayoutEmployees on ContentfulLayoutMitarbeiter {
		__typename
		id

		employees {
			...Employee
		}
	}

	fragment LayoutTeaserGroup on ContentfulLayoutTeaserGruppe {
		__typename
		id

		teaser {
			image {
				...CMSImage
			}
			text {
				...LayoutText
			}
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
				...CMSImage
			}
			description {
				raw
			}
		}
	}

	fragment LayoutProjects on ContentfulLayoutProjekte {
		__typename
		id

		type
		filter
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
