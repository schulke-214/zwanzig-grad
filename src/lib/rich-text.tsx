import React from 'react';
import { Link } from 'gatsby';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { CMSRichText } from 'data/cms';

import { getPageUrl } from 'lib/urls';


const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node: any) => (
			<p
				css={`
					&:last-child {
						margin-bottom: 0;
					}
				`}
			>
				<pre>{JSON.stringify(node)}</pre>
				<img alt={node?.data?.target?.fields?.description?.de} src={`${node?.data?.target?.fields?.file?.de?.url}?w=1240&q=50&fit=fill`} />
			</p>
		),
		[INLINES.ENTRY_HYPERLINK]: (node: any) => (
			<Link
				to={getPageUrl({
					metadata: {
						slug: node?.data?.target?.fields?.metadata?.de?.fields?.slug?.de
					}
				} as any)}
			>
				{node?.content[0]?.value}
			</Link>
		)
	}
};

const cleanupDocument = (document: any) => {
	const { content } = document;

	try {
		const last = content[content.length - 1];
		const textContent = last.content.reduce((accum: string, el: any) => accum += el.value, '');

		if (last.nodeType === 'paragraph' && textContent === '') {
			content.pop();
		}
	} catch (e) {
		console.warn('Failed cleaning document: ' + e + '\n' + JSON.stringify(4, null, document))
	}

	return document;
}

export const renderRichText = (document: any) => documentToReactComponents(cleanupDocument(document), options);

export const intoPlainText = (text: CMSRichText): string =>
	text.content
		.filter(content => content.nodeType === 'paragraph')
		.map(content =>
			content.content
				.filter(innnercontent => innnercontent.nodeType === 'text')
				.map(innercontent => innercontent.value)
				.join('')
		)
		.flat()
		.join(' ')
