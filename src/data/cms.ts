import { graphql } from 'gatsby';


export type CMSContentModule = {
	__typename: string;
	id: string;
};

export type CMSResponsiveImage = {
	id: string;
	description: string;
	responsive: {
		src: string;
		srcSet: string;
	};
	file: {
		url: string;
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
		description
		#mobile: resize(height: 420, width: 640, quality: 80, resizingBehavior: FILL) {
		#	src
		#}
		#desktop: resize(height: 640, width: 960, quality: 90, resizingBehavior: FILL) {
		#	src
		#}
		responsive: fluid(maxWidth: 960, maxHeight: 640, resizingBehavior: FILL, toFormat: JPG, quality: 80) {
			src
			srcSet
		}
		file {
			url
		}
	}
`;