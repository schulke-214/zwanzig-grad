import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { CMSRichText } from 'data/cms';


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
				<img alt={node?.data?.target?.fields?.description?.de} src={node?.data?.target?.fields?.file?.de?.url} />
			</p>
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
