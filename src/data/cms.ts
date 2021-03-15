import { graphql } from 'gatsby';


export type CMSContentModule = {
	__typename: string;
	id: string;
};

export type CMSResponsiveImage = {
	contentful_id: string;
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
	raw: string;
	references: [{
		contentful_id: string;
	}];
};

export const CMS = graphql`
	fragment CMSImage on ContentfulAsset {
		contentful_id
		description
		responsive: fluid(maxWidth: 960, maxHeight: 640, resizingBehavior: FILL, toFormat: JPG, quality: 80) {
			src
			srcSet
		}
		file {
			url
		}
	}
`;