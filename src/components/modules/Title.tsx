import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

import ModuleContainer from 'components/generic/ModuleContainer';

import { rem } from 'lib/polished';
import { tablet } from 'lib/media';


interface TitleProps {
	className?: string;
}

const Title: FunctionComponent<TitleProps> = ({ className, children }) => {
	return (
		<ModuleContainer className={className}>
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

	h1 {
		color: ${props => props.theme.colors.background};
		padding: 0;
		margin: 0;
		text-align: center;
	}
`;
