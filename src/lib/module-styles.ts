import { css } from 'styled-components';
import { rem } from 'lib/polished';
import { tablet, mobile } from 'lib/media';


export const common = css`
	margin-bottom: ${props => rem(props.theme.spacings.medium)} !important;

	${mobile} {
		&:last-child {
			margin-bottom: 0 !important;
		}
	}

	${tablet} {
		margin-bottom: ${props => rem(props.theme.spacings.large)} !important;
	}
`;