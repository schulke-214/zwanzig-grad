import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

import ModuleContainer from 'components/generic/ModuleContainer';
import Text from 'components/modules/Text';

import { CMSResponsiveImage } from 'data/cms';
import { LayoutModuleText } from 'data/layout';

import { tablet } from 'lib/media';
import { rem } from 'lib/polished';


interface TextImageProps {
	className?: string;
	image: CMSResponsiveImage;
	text: LayoutModuleText;
}

const TextImage: FunctionComponent<TextImageProps> = ({ className, text, image }) => {
	return (
		<ModuleContainer className={className}>
			<img src={image.responsive.src} alt={image.description} />
			<Text {...text} />
		</ModuleContainer>
	);
}

export default styled(TextImage)`
	display: flex;
	flex-direction: column;
	background-color: ${props => props.theme.colors.brand};
	padding: ${props => rem(props.theme.spacings.medium)};

	${tablet} {
		flex-direction: row;
		padding: ${props => rem(props.theme.spacings.xlarge)} ${props => rem(props.theme.spacings.large)};
	}

	& + & {
		padding-top: ${props => rem(props.theme.spacings.large)};
		margin-top: ${props => rem(-props.theme.spacings.large)};

		${tablet} {
			padding-top: 0;
			margin-top: ${props => rem(-props.theme.spacings.xlarge)};
		}
	}

	& + &:nth-child(odd) {
		${tablet} {
			flex-direction: row-reverse;
		}

		> img {
			${tablet} {
				margin-right: 0;
				margin-left: ${props => rem(props.theme.spacings.large)};
			}
		}
	}

	> img {
		display: block;
		width: 100%;
		object-fit: cover;
		margin-bottom: 0;

		${tablet} {
			width: 75%;
			height: ${props => rem(props.theme.spacings.xlarge * 5)};
			margin-right: ${props => rem(props.theme.spacings.large)};
		}
	}

	${Text} {
		min-width: 0;
		max-width: 100%;
		width: 100%;
		margin-top: ${props => rem(props.theme.spacings.medium)};

		${tablet} {
			margin-top: 0;
			width: 25%;
		}

		> *:last-child {
			margin-bottom: 0;
		}
	}
`;
