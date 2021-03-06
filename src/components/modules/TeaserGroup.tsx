import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import { useMedia } from 'react-use';

import ModuleContainer from 'components/generic/ModuleContainer';
import Picture from 'components/generic/Picture';
import Text from 'components/modules/Text';
import Title from 'components/modules/Title';

import { CMSResponsiveImage } from 'data/cms';
import { LayoutModuleText } from 'data/layout';

import { tablet, landscape } from 'lib/media';
import { rem } from 'lib/polished';


interface TeaserProps {
	className?: string;
	image: CMSResponsiveImage;
	text: LayoutModuleText;
}

const Teaser: FunctionComponent<TeaserProps> = ({ className, text, image }) => {
	const isLandscape = useMedia(landscape.replace('@media ', ''));

	return (
		<div className={className}>
			<Picture {...image} isCropped={isLandscape} isSlim />
			<Text {...text} isSmall />
		</div>
	);
};

const StyledTeaser = styled(Teaser)`
	display: flex;
	flex-direction: column;

	> ${Picture} {
		display: block;
		width: 100%;
		object-fit: cover;
		margin-bottom: 0;
	}

	${Text} {
		min-width: 0;
		max-width: 100%;
		width: 100%;
		margin: 0;
		margin-top: ${props => rem(props.theme.spacings.medium)};

		> *:last-child {
			margin-bottom: 0;
		}
	}
`;

interface TeaserGroupProps {
	className?: string;
	teaser: [{
		image: CMSResponsiveImage,
		text: LayoutModuleText
	}]
}

const TeaserGroup: FunctionComponent<TeaserGroupProps> = ({ className, teaser }) => (
	<ModuleContainer className={className}>
		{teaser.map(teaser => <StyledTeaser key={teaser.image.contentful_id + teaser.text.id} {...teaser} />)}
	</ModuleContainer>
);

export default styled(TeaserGroup)`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: ${props => rem(props.theme.spacings.large)};
	background-color: ${props => props.theme.colors.brand};
	padding: ${props => rem(props.theme.spacings.medium)};

	${landscape} {
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: ${props => rem(props.theme.spacings.large)};
		grid-row-gap: ${props => rem(props.theme.spacings.xlarge)};
	}

	${tablet} {
		padding: ${props => rem(props.theme.spacings.xlarge)};
	}

	${StyledTeaser} {
		&:nth-child(4n+1) {
			${landscape} {
				grid-column: auto / span 1;
				grid-row: auto / span 3;

				> ${Picture} {
					height: ${props => rem(props.theme.spacings.xlarge * 4)};
				}
			}

			${tablet} {
				flex-direction: column-reverse;

				> div {
					margin-top: 0;
					margin-bottom: ${props => rem(props.theme.spacings.medium)};
					padding-left: ${props => rem(props.theme.spacings.xlarge)};

					&,
					> * {
						text-align: right;
					}
				}
			}
		}

		&:nth-child(4n+2) {
			${landscape} {
				grid-column: auto / span 1;
				grid-row: auto / span 4;

				> ${Picture} {
					height: ${props => rem(props.theme.spacings.xlarge * 10)};
				}

				> div {
					padding-right: ${props => rem(props.theme.spacings.xlarge)};
				}
			}

			${tablet} {
				grid-row: auto / span 6;

				> ${Picture} {
					height: ${props => rem(props.theme.spacings.xlarge * 12)};
				}
			}
		}

		&:nth-child(4n+3) {
			${landscape} {
				grid-column: auto / span 1;
				grid-row: auto / span 3;

				> ${Picture} {
					height: ${props => rem(props.theme.spacings.xlarge * 8)};
				}
			}

			${tablet} {
				flex-direction: row;

				> ${Picture} {
					width: 50%;
				}

				> div {
					width: 50%;
					margin-top: 0;
					padding-left: ${props => rem(props.theme.spacings.large)};
				}
			}
		}

		&:nth-child(4n) {
			${landscape} {
				grid-column: auto / span 1;
				grid-row: auto / span 2;

				> ${Picture} {
					height: ${props => rem(props.theme.spacings.xlarge * 4)};
				}
			}

			${tablet} {
				grid-column: auto / span 2;
				grid-row: auto / span 3;

				flex-direction: row-reverse;

				> ${Picture} {
					width: 66.66%;
					height: ${props => rem(props.theme.spacings.xlarge * 6)};
				}

				> div {
					width: 33.33%;
					margin-top: 0;
					padding-right: ${props => rem(props.theme.spacings.large)};
				}
			}
		}
	}

	${Title} + & {
		padding-top: 0;
		margin-top: ${props => rem(-props.theme.spacings.large)};

		${tablet} {
			margin-top: ${props => rem(-props.theme.spacings.xlarge)};
		}
	}
`;
