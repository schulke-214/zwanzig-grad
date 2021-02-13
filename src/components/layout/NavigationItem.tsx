import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import { Link } from "gatsby";

import { rem } from "lib/polished";
import { tablet } from "lib/media";


const StyledListItem = styled.li`
	display: block;
	margin: 0;
	
	:not(:last-child) {
		margin-bottom: ${(props: any) => rem(props.theme.spacings.medium)};
	}
`;

export interface NavigationItemProps {
	to?: string;
	className?: string;
	onClick?: () => void;
}

const NavigationItem: FunctionComponent<NavigationItemProps> = ({ to, className, children, onClick }) => {
	let content;

	if (to) {
		content = (
			<Link
				to={to}
				className={className}
				onClick={onClick}
				itemProp="url"
			>
				{children}
			</Link>
		);
	} else {
		content = (
			<button className={className} onClick={onClick}>
				{children}
			</button>
		);
	}

	return (
		<StyledListItem itemProp={to && 'name'}>
			{content}
		</StyledListItem>
	);
};

export default styled(NavigationItem)<NavigationItemProps>`
	background-color: transparent;
	white-space: nowrap;
	cursor: pointer;
	font-weight: 500;
	font-size: 30px;
	color: ${props => props.theme.colors.foreground};
	
	&::before {
		border-bottom-width: 2px;
	}

	${tablet} {
		font-size: 40px;
	}
`;
