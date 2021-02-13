import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import ContactData, {ContactDataItem} from 'components/generic/ContactData';
import NavigationItem from 'components/layout/NavigationItem';
import { NavigationLinks } from 'components/layout/Navigation';

import { rem } from 'lib/polished';
import { tablet, landscape } from 'lib/media';


const FooterContainer = styled.footer`
	width: 100%;
	height: min-content;
	background-color: ${props => props.theme.colors.brand};
	padding: ${props => rem(props.theme.spacings.large)};
	
	${tablet} {
		padding: ${props => rem(props.theme.spacings.xlarge)} ${props => rem(props.theme.spacings.large)};;
	}
`;

const FooterContent = styled.div`
	max-width: ${props => rem(props.theme.layout.maxWidth - 8 * props.theme.spacings.large)};
	margin: 0 auto;

	${ContactData} {
		${landscape} {
			display: flex;
			flex-direction: row;
		}

		> ${ContactDataItem} {
			${landscape} {
				margin-bottom: 0;
				width: 33.33%;
			}

			${NavigationItem} {
				font-size: unset;

				&::before {
					border-bottom-width: 1px;
				}
			}
		}
	}
`;

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = ({}) => (
	<FooterContainer>
		<FooterContent>
			<ContactData>
				<ContactDataItem>
					<strong>Seitenübersicht</strong>
					<NavigationLinks />
				</ContactDataItem>
			</ContactData>
		</FooterContent>
	</FooterContainer>
);

export default Footer;
