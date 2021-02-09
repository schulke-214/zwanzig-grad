import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { rem } from 'lib/polished';
import { tablet } from 'lib/media';


const FooterContainer = styled.footer`
	background-color: ${props => props.theme.colors.muted};
	width: 100%;
	padding: ${props => rem(props.theme.spacings.medium)};
	
	${tablet} {
		padding: ${props => rem(props.theme.spacings.xlarge)} ${props => rem(props.theme.spacings.large)};;
	}

	ul {
		list-style: none;
		display: block;
	}
`;

const FooterContent = styled.div`
	max-width: ${props => rem(props.theme.layout.maxWidth - 2 * props.theme.spacings.large)};
	margin: 0 auto;
`;

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = ({}) => (
	<FooterContainer>
		<FooterContent>
			<h3>SSW</h3>
		</FooterContent>
	</FooterContainer>
);

export default Footer;
