import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components';

import { renderRichText } from 'lib/rich-text';
import { rem } from 'lib/polished';
import { tablet } from 'lib/media';

import ModuleContainer from 'components/generic/ModuleContainer';


interface TextProps {
	className?: string;
	isSmall?: boolean;
	desktopColumns?: number;
	text: {
		json?: any;
	};
}

const Text: FunctionComponent<TextProps> = ({ className, text }) => {
	return (
		<ModuleContainer className={className}>
			{renderRichText(text?.json)}
		</ModuleContainer>
	);
}

export default styled(Text)`
	${props => props.isSmall && css`
		columns: 1 !important;
		margin-left: auto;
		margin-right: auto;
		max-width: ${props => rem(props.theme.layout.maxWidth - props.theme.spacings.xlarge * 8)};
	`}

	${props => props.desktopColumns && css`
		${tablet} {
			columns: ${props.desktopColumns};
		}
	`}

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

	> *::last-child {
		margin-bottom: 0;
	}
`;
