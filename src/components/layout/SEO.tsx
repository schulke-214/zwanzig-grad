import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';


type SEOMetaElement = React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>[];

export interface SEOProps {
	description?: string;
	keywords?: string[];
	image?: string;
	slug?: string;
	meta?: SEOMetaElement;
	type?: string;
	title: string;
}

const SEO: FunctionComponent<SEOProps> = ({
	description = '',
	keywords = [],
	image = '',
	meta = [],
	title = '',
	type = 'website',
	slug = ''
}) => {
	const query = useStaticQuery<any>(
		graphql`
			query SiteMetaData {
				seoConfig: allContentfulMetaSeoConfiguration {
					edges {
						node {
							name
							description
							domain
							location {
								lat
								lon
							}
							sharingImage {
								fixed(toFormat: JPG, quality: 80) {
									src
								}
							}
						}
					}
				}
			}
		`
	);

	const config = query.seoConfig.edges[0].node;

	const descr: string = description || config.description;
	const preview: string = image || config.sharingImage.fixed.src;
	const url: string = `${config.domain}/${(slug?.startsWith('/') ? slug.substr(1) : slug) ?? ''}`;

	return (
		<Helmet
			htmlAttributes={{ lang: 'de' }}
			title={title}
			titleTemplate={`${config.name} – %s`}
			meta={[
				{
					name: `robots`,
					content: `index, follow`
				},
				{
					name: `description`,
					content: descr
				},
				{
					name: `keywords`,
					content: keywords.join(', ')
				},
				{
					property: `og:title`,
					content: title
				},
				{
					property: `og:description`,
					content: descr
				},
				{
					property: `og:type`,
					content: type
				},
				{
					property: `og:site_name`,
					content: config.name
				},
				{
					property: `og:url`,
					content: url
				},
				{
					property: `og:image`,
					content: preview
				},
				{
					property: `og:locale`,
					content: 'de_DE'
				},
				{
					name: `twitter:card`,
					content: `summary`
				},
				{
					name: `twitter:image`,
					content: preview
				},
				{
					name: `twitter:title`,
					content: title
				},
				{
					name: `twitter:description`,
					content: descr
				},
				{
					httpEquiv: 'Content-Type',
					content: 'text/html; charset=utf-8'
				},
				...meta
			]}
		>
			<script type="application/ld+json">
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'WebPage',
					url,
					image: preview,
					name: `${config.name} – ${title}`,
					description: descr,
					contentLocation: JSON.stringify({
						'@type': 'Place',
						geo: {
							'@type': "GeoCoordinates",
							latitude: `${config.location.lat}`,
							longitude: `${config.location.lon}`
						}
					}),
					copyrightYear: (new Date()).getFullYear(),
					keywords
				})}
			</script>
		</Helmet>
	);
};

export default SEO;
