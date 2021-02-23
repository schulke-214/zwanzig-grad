import React, { FunctionComponent } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

import { ANIMATION_LENGTH, ANIMATION_OFFSET } from 'components/layout/PageTransition';


const Link: FunctionComponent<any> = ({ children, ...props }) => {
	// const { to } = props;

	// if (to === window.location.pathname) {
	// }

	return (
		<TransitionLink
			exit={{ length: ANIMATION_LENGTH / 100 }}
			entry={{ delay: ANIMATION_OFFSET / 100, }}
			{...props}
		>
			{children}
		</TransitionLink>
	);
};

export default Link;
