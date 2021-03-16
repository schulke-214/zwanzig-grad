import { graphql } from 'gatsby';

import { CMSResponsiveImage, CMSRichText } from 'data/cms';


export enum ProjectType {
	Intern = 'Intern',
	Extern = 'Extern'
};

export type Project = {
	slug: string;
	title: string;
	type: ProjectType;
	nr: number;
	description: CMSRichText;
	location: string;
	client: string;
	year: number;
	material: string[];
	tileImage: CMSResponsiveImage;
	images: CMSResponsiveImage[];
};

export const Project = graphql`
	fragment Project on ContentfulProjekt {
		slug
		title
		type
		nr
		year
		client
		location
		tileImage {
			...CMSImage
		}
		images {
			...CMSImage
		}
		material
		description {
			raw
			references {
				...CMSImage
			}
		}
	}
`;
