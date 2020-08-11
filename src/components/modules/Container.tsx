import React, { FunctionComponent } from 'react'
import Text from './Text';
import PageLayout from 'components/PageLayout';


type FlexDirection = 'row' | 'column';
type ContainerDirection = 'Horizontal' | 'Vertical';

interface ContainerProps {
	type: ContainerDirection;
	content: any;
}

const Container: FunctionComponent<ContainerProps> = ({ type, content }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: type === 'Horizontal' ? 'row' : type === 'Vertical' ? 'column' : undefined
			}}
		>
			<PageLayout content={content} />
		</div>
	);
}

export default Container;
