import React, { FunctionComponent } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface TextProps {
	text: {
		json?: any;
	};
}

const Text: FunctionComponent<TextProps> = ({ text }) => {
	return (
		<div>
			{documentToReactComponents(text?.json)}
		</div>
	);
}

export default Text;
