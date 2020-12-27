import React, { FunctionComponent } from 'react'

import { common } from 'lib/module-styles';

interface AccordionProps {}

const Accordion: FunctionComponent<AccordionProps> = () => {
	return (
		<div css={common}>
			{"<Accordion>"}
		</div>
	);
}

export default Accordion;
