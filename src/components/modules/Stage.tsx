import React, { Fragment, FunctionComponent } from 'react'
import styled from 'styled-components';

import { LayoutModuleStage } from 'data/layout';

import ModuleContainer from 'components/generic/ModuleContainer';

import { rem } from 'lib/polished';
import { tablet } from 'lib/media';


const StageBackground = styled.picture`
	position: absolute;
	top: 0;
	left: 0;
	z-index: ${props => props.theme.layers.default.background};

	&, img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const StageContent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: ${props => rem(props.theme.spacings.medium)};

	h1 {
		color: ${props => props.theme.colors.background};
		font-size: 2.5rem;
		margin: 0;
		padding: 0;
		border-bottom: 0;
		text-align: center;

		${tablet} {
			font-size: 4rem;
		}

		span {
			text-align: center;
			display: block;
			margin: 0 auto;
			color: inherit;
			font-size: 75%;
			margin-top: ${props => rem(props.theme.spacings.small)};
		}

		em {
			font-style: normal;
			color: inherit;
		}
	}
`;

const StageSpacer = styled(ModuleContainer)`
	height: calc(90vh - ${props => rem(props.theme.logo.height + 2 * props.theme.spacings.medium + props.theme.spacings.large)});
	margin-bottom: ${props => rem(props.theme.spacings.xlarge)};

	${tablet} {
		margin-bottom: ${props => rem(props.theme.spacings.xlarge * 2)};
	}
`;

interface StageProps extends LayoutModuleStage {
	className?: string;
}

const Stage: FunctionComponent<StageProps> = ({ className, staticText, connection, buzzWords, background }) => {
	return (
		<div className={className}>
			<StageContent>
				<h1>
					{staticText}
					<span>{connection} <em>{buzzWords[0]}</em></span>
				</h1>
				<StageBackground>
					<source srcSet={background.responsive.srcSet} media={tablet.replace('@media', '')} />
					<img src={background.responsive.src} alt={background.description} /> 
				</StageBackground>
			</StageContent>
			<StageSpacer />
		</div>
	);
}

export default styled(Stage)`
`;
