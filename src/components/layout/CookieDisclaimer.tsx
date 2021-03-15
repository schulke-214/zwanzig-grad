import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import { setCookieClearHandler } from 'lib/cookies';
import { rem } from 'lib/polished';
import { tablet } from 'lib/media';
import { renderRichText } from 'lib/rich-text';

import { useCookies } from 'hooks/use-cookies';
import { useForceUpdate } from 'hooks/use-force-update';


const CookieDisclaimerButton = styled.button`
	text-decoration: underline;
	background-color: transparent;
	border: 0;
	outline: none;
	padding: 0;
	cursor: pointer;

	&:not(:last-child) {
		margin-right: ${props => rem(props.theme.spacings.small)};
	}

	&:hover {
		color: ${props => props.theme.colors.brand};
	}

	${tablet} {
		display: block;
		margin: 0 auto ${props => rem(props.theme.spacings.xsmall)} !important;
	}
`;

const CookieDisclaimerContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: ${props => props.theme.colors.background};
	box-shadow: 20px 20px 20px 5px black;
	border-top: 1px solid ${props => props.theme.colors.muted};
`;

const CookieDisclaimerInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 100%;
	max-width: ${props => rem(props.theme.layout.maxWidth - 2 * props.theme.spacings.large)};
	padding: ${props => rem(props.theme.spacings.large)} ${props => rem(props.theme.spacings.medium)};

	div:first-child {
		margin-bottom: ${props => rem(props.theme.spacings.medium)};

		${tablet} {
			margin-bottom: 0;
			margin-right: ${props => rem(props.theme.spacings.medium)};
		}

		> p:last-child {
			margin: 0;
		}
	}

	${tablet} {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: ${props => rem(props.theme.spacings.xlarge)} ${props => rem(props.theme.spacings.large)};
	}
`;

interface CookieDisclaimerProps {}

const CookieDisclaimer: FunctionComponent<CookieDisclaimerProps> = ({}) => {
	const cookies = useCookies();
	const [refresh, render_id] = useForceUpdate();
	const [answered, setAnswered] = useState(() => (cookies.allowed() || cookies.permitted()) || false);
	const storeAnswer = (answer: boolean) => {
		if (answer) cookies.allow()
		else cookies.permit()

		setAnswered(true);
	};

	const data = useStaticQuery(
		graphql`
			{
				disclaimer: allContentfulMetaLegalCookieHinweis {
					nodes {
						title
						description {
							raw
							references {
								contentful_id
								...Page
							}
						}
					}
				}
			}
		`
	);

	const disclaimer = data.disclaimer.nodes[0];

	useEffect(() => {
		setCookieClearHandler(() => {
			setAnswered((cookies.allowed() || cookies.permitted()) || false);
			refresh();
		});

		if (answered && cookies.allowed()) {
			(async () => {
				const {default: withAnalytics} = await import('lib/analytics');
	
				withAnalytics(analytics => {
					analytics.page();
				});
			})();
		}

		return () => {
			setCookieClearHandler(() => {});
		};
	}, [answered, render_id]);

	if (answered) return <></>;

	return (
		<CookieDisclaimerContainer>
			<CookieDisclaimerInnerContainer>
				<div>{renderRichText(disclaimer.description)}</div>
				<div>
					<CookieDisclaimerButton onClick={() => storeAnswer(true) as any}>Akzeptieren</CookieDisclaimerButton>
					<CookieDisclaimerButton onClick={() => storeAnswer(false) as any}>Ablehnen</CookieDisclaimerButton>
				</div>
			</CookieDisclaimerInnerContainer>
		</CookieDisclaimerContainer>
	);
};

export default CookieDisclaimer;
