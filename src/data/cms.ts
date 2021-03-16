import { graphql } from 'gatsby';


export type CMSContentModule = {
	__typename: string;
	id: string;
};

export type CMSResponsiveImage = {
	contentful_id: string;
	description: string;
	file: {
		details: {
			image: {
				width: number;
				height: number;
			}
		};
		url: string;
	};
	fluid: {
		src: string;
		srcSet: string;
		sizes: string;
		aspectRatio: number;
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
		file {
			details {
				image {
					width
					height
				}
			}
			url
		}
		fluid(quality: 80) {
			src
			srcSet
			aspectRatio
		}
	}
`;