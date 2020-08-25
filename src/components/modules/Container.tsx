import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import PageLayout from 'components/PageLayout';
import { rem } from 'lib/polished';
import { tablet } from 'lib/media';


interface ContainerProps {
	className?: string;
	type: 'Horizontal' | 'Vertical';
	content: any;
}

const Container: FunctionComponent<ContainerProps> = ({ className, type, content }) => {
	return (
		<div className={className}>
			<PageLayout content={content} />
		</div>
	);
}

export default styled(Container)`
	display: flex;
	flex-direction: column;

	${tablet} {
		flex-direction: ${props => props.type === 'Horizontal' ? 'row' : props.type === 'Vertical' ? 'column' : 'unset'};
	}

	> div:not(:first-child) {
		margin-top: ${props => rem(props.theme.spacings.medium)};

		${tablet} {
			margin-top: 0;
			margin-left: ${props => rem(props.theme.spacings.large)};
		}
	}

	> div {
		flex: 1 0 0;
	}
`;
