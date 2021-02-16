import { graphql } from 'gatsby';

import { CMSResponsiveImage, CMSRichText } from 'data/cms';


export type Project = {
	slug: string;
	title: string;
	description: CMSRichText;
	location: string;
	client: string;
	year: number;
	material: string[];
	tileImage: CMSResponsiveImage;
	images: CMSResponsiveImage[];
}

export const Project = graphql`
	fragment Project on ContentfulProjekt {
		slug
		title
		year
		client
		location
		tileImage {
			fluid(quality: 80, , maxWidth: 720) {
				src
			}
			description
		}
		images {
			...CMSImage
		}
		material
		description {
			json
			content {
				nodeType
				content {
					value
					nodeType
				}
			}
		}
	}
`;
