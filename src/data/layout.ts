import { graphql } from 'gatsby';

export const Layout = graphql`
	fragment Layout on ContentfulLayout {
		content {
			...on ContentfulLayoutAccordion {
				...LayoutAccordion
			}
			...on ContentfulLayoutContainer {
				...LayoutContainer
			}
			...on ContentfulLayoutSlider {
				...LayoutSlider
			}
			...on ContentfulLayoutText {
				...LayoutText
			}
		}
	}

	fragment LayoutText on ContentfulLayoutText {
		id
		text {
			text
		}
	}

	fragment LayoutAccordion on ContentfulLayoutAccordion {
		id
		openFirstElement
		title
		canOpenMultiple
		content {
			title
			id
			content {
				content
			}
		}
	}

	fragment LayoutContainer on ContentfulLayoutContainer {
		id
		type
	}

	fragment LayoutSlider on ContentfulLayoutSlider {
		id
		showTitle
		title
		images {
			id
			title
		}
	}
`;