import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

import ModuleContainer from 'components/generic/ModuleContainer';
import ChapterHeadline from 'components/generic/ChapterHeadline';

import { rem } from 'lib/polished';
import { tablet } from 'lib/media';


interface TitleProps {
	className?: string;
	subtitle?: string;
}

const Title: FunctionComponent<TitleProps> = ({ className, children, subtitle }) => {
	return (
		<ModuleContainer className={className}>
			{subtitle && <ChapterHeadline inheritColor>{subtitle}</ChapterHeadline>}
			<h1>{children}</h1>
		</ModuleContainer>
	);
}

export default styled(Title)`
	background-color: ${props => props.theme.colors.brand};
	padding: ${props => rem(props.theme.spacings.large)};

	${tablet} {
		padding: ${props => rem(props.theme.spacings.xlarge)};
	}

	h1,
	${ChapterHeadline} {
		color: ${props => props.theme.colors.background};
	}

	h1 {
		padding: 0;
		margin: 0;
		text-align: center;
		text-transform: uppercase;
	}
`;
