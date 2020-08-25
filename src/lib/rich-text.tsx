import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => (
			<p>
				<img alt={node.data.target.fields.description.de} src={node.data.target.fields.file.de.url} />
		  	</p>
		)
	}
};
  
export const renderRichText = (document: any) => documentToReactComponents(document, options);