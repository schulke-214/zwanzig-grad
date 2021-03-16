import styled from 'styled-components';
import { rem } from 'lib/polished';
import { tablet } from 'lib/media';


export default styled.div`
	position: relative;
	z-index: ${props => props.theme.layers.default.content};
	margin-bottom: ${props => rem(props.theme.spacings.large)};

	${tablet} {
		margin-bottom: ${props => rem(props.theme.spacings.xlarge)};
	}

	& > div:not(.picture) {
		margin-bottom: 0;
	}
`;
