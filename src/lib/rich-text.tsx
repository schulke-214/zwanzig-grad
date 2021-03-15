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
				<img alt={node?.data?.target?.resolved?.description?.de} src={`${node?.data?.target?.resolved?.responsive?.src}`} />
			</p>
		),
		[INLINES.ENTRY_HYPERLINK]: (node: any) => (
			<Link
				to={getPageUrl(node?.data?.target?.resolved) as any}
			>
				{node?.content[0]?.value}
			</Link>
		)
	}
};

const cleanupDocument = (rawDocument: CMSRichText) => {
	const document = JSON.parse(rawDocument.raw);
	const { references } = rawDocument;
	const { content } = document;

	const insertReferences = (node: any) => {
		const {id} = node?.data?.target?.sys || {};

		if (!id) return;

		const ref = references.find(ref => ref.contentful_id === id);

		if (!ref) throw new Error(`Expected ref ${id} ${JSON.stringify(node, null, 4)}`);

		node.data.target.resolved = ref;
	};

	try {
		const last = content[content.length - 1];
		const textContent = last.content.reduce((accum: string, el: any) => accum += el.value, '');

		if (last.nodeType === 'paragraph' && textContent === '') {
			content.pop();
		}

		content.forEach((inner: any) => {
			insertReferences(inner);
			inner?.content.forEach((node: any) => insertReferences(node));
		});

	} catch (e) {
		console.warn('Failed cleaning document: ' + e + '\n' + JSON.stringify(4, null, document))
	}

	return document;
}

export const renderRichText = (document: CMSRichText) => documentToReactComponents(cleanupDocument(document), options);

export const intoPlainText = (document: CMSRichText): string =>
	cleanupDocument(document)?.content
		.filter((content: any) => content.nodeType === 'paragraph')
		.map((content: any) =>
			content.content
				.filter((innercontent: any) => innercontent.nodeType === 'text')
				.map((innercontent: any) => innercontent.value)
				.join('')
		)
		.flat()
		.join(' ')
