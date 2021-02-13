import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import ContactData from 'components/generic/ContactData';

import { rem } from 'lib/polished';
import { tablet } from 'lib/media';


const FooterContainer = styled.footer`
	width: 100%;
	height: min-content;
	background-color: ${props => props.theme.colors.brand};
	padding: ${props => rem(props.theme.spacings.medium)};
	
	${tablet} {
		padding: ${props => rem(props.theme.spacings.xlarge)} ${props => rem(props.theme.spacings.large)};;
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
			<ContactData />
		</FooterContent>
	</FooterContainer>
);

export default Footer;
