import React, { FunctionComponent } from 'react'
import styled from 'styled-components';


import { LayoutModuleFacts } from 'data/layout';

import ModuleContainer from 'components/generic/ModuleContainer';

import { rem } from 'lib/polished';
import { tablet, landscape } from 'lib/media';


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
					{facts.map(fact => (
						<li key={fact.id}>
							<p>{fact.description}</p>
						</li>
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

		li {
			display: block;
			width: 100%;
			margin-bottom: ${props => rem(props.theme.spacings.medium)};

			${landscape} {
				margin-bottom: 0;

				&:not(:last-child) {
					margin-right: ${props => rem(props.theme.spacings.large)};
				}

				p {
					margin-bottom: 0;
				}
			}
		}
	}
`;
