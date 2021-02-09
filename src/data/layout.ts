import { graphql } from 'gatsby';

export const Layout = graphql`
	fragment Layout on ContentfulLayout {
		content {
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

	fragment LayoutSlider on ContentfulLayoutSlider {
		__typename
		id
		showTitle
		title
		images {
			id
			title
			mobile: resize(height: 420, width: 640, quality: 80, resizingBehavior: FILL) {
				src
			}
			desktop: resize(height: 640, width: 960, quality: 90, resizingBehavior: FILL) {
				src
			}
		}
	}

	fragment LayoutFacts on ContentfulLayoutFacts {
		__typename
		id
		headline
		facts {
			description
		}
	}

	fragment LayoutProjects on ContentfulLayoutProjects {
		__typename
		id
		filter
		sortBy
		order
	}

	fragment LayoutStage on ContentfulLayoutStage {
		__typename
		id
		staticText
		buzzWords
		background {
			id
			title
			mobile: resize(height: 540, width: 960, quality: 80, resizingBehavior: FILL) {
				src
			}
			desktop: resize(height: 1080, width: 1920, quality: 90, resizingBehavior: FILL) {
				src
			}
		}
	}
`;
