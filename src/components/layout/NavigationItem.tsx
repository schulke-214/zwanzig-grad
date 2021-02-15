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
	hasItemProp?: boolean;
	className?: string;
	onClick?: () => void;
}

const NavigationItem: FunctionComponent<NavigationItemProps> = ({ to, hasItemProp, className, children, onClick }) => {
	let content;

	if (to) {
		content = (
			<Link
				to={to}
				className={className}
				onClick={onClick}
				itemProp={to && hasItemProp ? 'url' : undefined}
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
		<StyledListItem itemProp={to && hasItemProp ? 'name' : undefined}>
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
