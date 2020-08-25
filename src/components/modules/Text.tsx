import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { renderRichText } from 'lib/rich-text';

interface TextProps {
	className?: string;
	text: {
		json?: any;
	};
}

const Text: FunctionComponent<TextProps> = ({ className, text }) => {
	return (
		<div className={className}>
			{renderRichText(text?.json)}
		</div>
	);
}

export default styled(Text)`
	> h1,
	> h2,
	> h3,
	> h4,
	> h5,
	> h6 {
		&:first-child {
			margin-top: 0;
		}
	}

	img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: cover;
	}
`;
