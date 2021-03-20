import React from 'react';
import { Link } from 'gatsby';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Picture from 'components/generic/Picture';

import { CMSRichText, CMSResponsiveImage } from 'data/cms';
import { Page } from 'data/page';

import { getPageUrl } from 'lib/urls';

import { phoneNumber } from 'utils/format';


type EmbeddedAsset = CMSResponsiveImage & {
	__typename: string;
};

type EmbeddedEntryBlockContact = {
	__typename: string;
	contentful_id: string;
	city: string;
	email: string;
	fax: string;
	houseNumber: number;
	landline: string;
	legalName: string;
	mobile: string;
	name: string;
	owner: string;
	postalCode: string;
	street: string;
};

type EmbeddedEntryBlock = EmbeddedEntryBlockContact;

type EntryHyperLink = Page;

type RichTextNode = {
	content: any;
	data?: {
		target?: {
			resolved: EmbeddedAsset | EmbeddedEntryBlock | EntryHyperLink;
		};
	};
};

const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node: RichTextNode) => {
			const resolved = (node?.data?.target?.resolved || {}) as EmbeddedAsset;

			if (!resolved) return;

			return (
				<Picture
					{...resolved}
					css={`
						&:last-child {
							margin-bottom: 0;
						}
					`}
				/>
			);
		},
		[BLOCKS.EMBEDDED_ENTRY]: (node: RichTextNode) => {
			const resolved = (node?.data?.target?.resolved || {}) as EmbeddedEntryBlock;

			if (!resolved) return;
		
			switch (resolved.__typename) {
				case 'ContentfulMetaLegalKontakt':
					const contact = resolved as EmbeddedEntryBlockContact;

					return (
						<div>
							<h4>Anschrift</h4>
							<p>
								<span>{contact.name}</span><br />
								<span>{contact.owner}</span><br />
								<span>{contact.street} {contact.houseNumber}</span><br />
								<span>{contact.postalCode} {contact.city}</span><br />
							</p>
							<h4>Kontakt</h4>
							<p>
								<span>Telefon: <a href={`tel:${contact.landline}`} title={`Rufen Sie ${contact.legalName} an`}>{phoneNumber(contact.landline)}</a></span><br />
								<span>Mobil: <a href={`tel:${contact.mobile}`} title={`Rufen Sie ${contact.legalName} an`}>{phoneNumber(contact.mobile)}</a></span><br />
								<span>Fax: <a href={`tel:${contact.fax}`} title={`Senden Sie ${contact.legalName} ein Fax`}>{phoneNumber(contact.fax)}</a></span><br />
								<span>E-Mail: <a href={`tel:${contact.email}`} title={`Schreibe Sie ${contact.legalName} eine E-Mail`}>{contact.email}</a></span><br />
							</p>
						</div>
					);
				default:
					console.error('RichText Embedded Entry Block could not be rendered:', node);
					return <></>;
			}
		},
		[INLINES.ENTRY_HYPERLINK]: (node: RichTextNode) => (
			<Link
				to={getPageUrl(node?.data?.target?.resolved as Page) as any}
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

	console.log("cleaned document", document)

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
