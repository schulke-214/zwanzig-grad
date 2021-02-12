import { graphql } from 'gatsby';

import { CMSResponsiveImage } from 'data/cms';


export type Project = {
	slug: string;
	title: string;
	description: string
	client: string;
	year: number;
	materials: string[];
	titleImage: CMSResponsiveImage;
}

export const Project = graphql`
	fragment Project on ContentfulProjekt {
		slug
		title
		year
		client
		tileImage {
			fluid(quality: 80, , maxWidth: 720) {
				src
			}
			description
		}
	}
`;
