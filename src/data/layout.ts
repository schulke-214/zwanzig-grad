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
		__typename
		id
		text {
			json
		}
	}

	fragment LayoutAccordion on ContentfulLayoutAccordion {
		__typename
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
		__typename
		id
		type
		content {
			...on ContentfulLayoutText {
				...LayoutText
			}
		}
	}

	fragment LayoutSlider on ContentfulLayoutSlider {
		__typename
		id
		showTitle
		title
		images {
			id
			title
		}
	}
`;