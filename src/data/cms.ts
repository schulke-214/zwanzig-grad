import { graphql } from 'gatsby';


export type CMSContentModule = {
	__typename: string;
	id: string;
};

export type CMSResponsiveImage = {
	id: string;
	title: string;
	mobile: {
		src: string;
	};
	desktop: {
		src: string;
	};
};

export type CMSRichText = {
	id: string;
	content: Array<{
		nodeType: string;
		content: [{
			value: string;
			nodeType: string;
		}]
	}>;
	json: Object;
};

export const CMS = graphql`
	fragment CMSImage on ContentfulAsset {
		id
		title
		mobile: resize(height: 420, width: 640, quality: 80, resizingBehavior: FILL) {
			src
		}
		desktop: resize(height: 640, width: 960, quality: 90, resizingBehavior: FILL) {
			src
		}
	}
`;