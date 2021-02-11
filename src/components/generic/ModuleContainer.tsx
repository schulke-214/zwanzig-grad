import styled from 'styled-components';
import { rem } from 'lib/polished';
import { tablet, mobile } from 'lib/media';


export default styled.div`
	position: relative;
	z-index: ${props => props.theme.layers.default.content};
	margin-bottom: ${props => rem(props.theme.spacings.medium)};

	${mobile} {
		&:last-child {
			margin-bottom: 0;
		}
	}

	${tablet} {
		margin-bottom: ${props => rem(props.theme.spacings.large)};
	}

	& > div {
		margin-bottom: 0;
	}
`;
