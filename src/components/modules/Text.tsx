import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components';

import { renderRichText } from 'lib/rich-text';
import { rem } from 'lib/polished';
import { tablet } from 'lib/media';

import ModuleContainer from 'components/generic/ModuleContainer';

import { CMSRichText } from 'data/cms';


interface TextProps {
	className?: string;
	isSmall?: boolean;
	desktopColumns?: number;
	text: CMSRichText;
};

const Text: FunctionComponent<TextProps> = ({ className, text }) => (
	<ModuleContainer className={className}>
		{renderRichText(text)}
	</ModuleContainer>
);

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

	li > p {
		display: block;
		margin-left: 1.5em;
		margin-top: -1.7em;
	}

	> *::last-child {
		margin-bottom: 0;
	}
`;
