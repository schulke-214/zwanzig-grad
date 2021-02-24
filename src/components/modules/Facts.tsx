import React, { FunctionComponent } from 'react'
import styled from 'styled-components';


import { LayoutModuleFacts } from 'data/layout';

import ModuleContainer from 'components/generic/ModuleContainer';

import { rem } from 'lib/polished';
import { tablet, landscape } from 'lib/media';
import { renderRichText } from 'lib/rich-text';


const Fact = styled.li`
	display: block;
	position: relative;
	width: 100%;
	margin-bottom: ${props => rem(props.theme.spacings.medium)};

	${landscape} {
		margin-bottom: 0;

		&:not(:last-child) {
			margin-right: ${props => rem(props.theme.spacings.large)};
		}
	}
`;

const FactIcon = styled.img`
	display: block;
	margin-bottom: 0;
	width: ${props => rem(props.theme.spacings.xlarge)};
	height: ${props => rem(props.theme.spacings.xlarge)};
	object-fit: cover;
`;

const FactIndicator = styled.div`
	position: relative;
	font-style: italic;
	padding-top: ${props => rem(props.theme.spacings.medium)};
	margin-bottom: ${props => rem(props.theme.spacings.small)};

	&::after {
		content: '';
		position: absolute;
		left: 0;
		top: ${props => rem((props.theme.spacings.medium - props.theme.decorations.line.height) / 2)};
		height: ${props => rem(props.theme.decorations.line.height)};
		width: ${props => rem(props.theme.decorations.line.width)};
		background-color: ${props => props.theme.decorations.line.color};
	}
`;

interface FactsProps extends LayoutModuleFacts {
	className?: string;
}

const Facts: FunctionComponent<FactsProps> = ({ className, headline, facts }) => {
	return (
		<ModuleContainer>
			<div className={className}>
				<div>
					<h2>{headline}</h2>
				</div>
				<ul>
					{facts.map((fact, index) => (
						<Fact key={fact.id}>
							<FactIcon src={fact.icon.file.url} alt={fact.icon.description} />
							<FactIndicator>0{index + 1}</FactIndicator>
							{renderRichText(fact.description.json)}
						</Fact>
					))}
				</ul>
			</div>
		</ModuleContainer>
	);
}

export default styled(Facts)`
	> div {
		background-color: ${props => props.theme.colors.brand};
		padding: ${props => rem(props.theme.spacings.xlarge)};

		${tablet} {
			padding: ${props => rem(props.theme.spacings.xlarge * 2)};
		}

		h2 {
			color: ${props => props.theme.colors.background};
			padding: 0;
			margin: 0;
			font-size: 200%;

			${tablet} {
				font-size: 300%;
			}
		}
	}

	ul {
		margin-top: ${props => rem(props.theme.spacings.large)};
		display: flex;
		flex-direction: column;
		list-style: none;

		${landscape} {
			flex-direction: row;
		}
	}
`;
