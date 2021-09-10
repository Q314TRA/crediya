import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Heading from "@ui/heading";
import Anchor from "@ui/anchor";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import FeatureBox from "@components/box-image/layout-one";
import { SectionWrap } from './features-area.style'

const FeaturesArea = (props) => {
	const featuredDataQuery = useStaticQuery(graphql`
        query infotechnoFeatureQueryData {
            indexInfotechnoJson(id: {eq: "infotechno-featured-content"}) {
                title
                subtitle
            }
            allItServicesJson(sort: {order: DESC, fields: id}, filter: {is_featured: {eq: true}}, limit: 3) {
                edges {
                  node {
                    fields{
                        slug
                    }
                    id
                    title
                    excerpt
                    icon {
                      img{
                        childImageSharp{
							gatsbyImageData(
								layout: FIXED
								width: 100
								height: 108
								placeholder: TRACED_SVG
								formats: WEBP
								quality: 100
							)
                        }
                      }
                    }
                  }
                }
            }
        }
    `);
	const featureSecData = featuredDataQuery.indexInfotechnoJson;
	const featureData = featuredDataQuery.allItServicesJson.edges;
	const { featureBoxStyles, linkStyle, headingStyle } = props;
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							subtitle={featureSecData.subtitle}
							title={featureSecData.title}
						/>
					</Col>
				</Row>
				<Row>
					{featureData.map(feature => (
						<Col lg={4} md={6} key={feature.node.id}>
							<FeatureBox
								{...featureBoxStyles}
								title={feature.node.title}
								imageSrc={feature.node.icon.img}
								desc={feature.node.excerpt}
								path={`/it-service/${feature.node.fields.slug}`}
							/>
						</Col>
					))}
				</Row>
				<Row>
					<Col lg={12}>
						<Heading {...headingStyle}>Challenges are just opportunities in disguise. <Anchor {...linkStyle} path="/">Take the challenge!</Anchor></Heading>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

FeaturesArea.propTypes = {
	featureBoxStyles: PropTypes.object,
	headingStyle: PropTypes.object,
	linkStyle: PropTypes.object
}

FeaturesArea.defaultProps = {
	featureBoxStyles: {
		mt: '60px',
		responsive: {
			small: {
				mt: '47px'
			}
		}
	},
	headingStyle: {
		as: 'h3',
		fontSize: '18px',
		fontweight: 500,
		lineHeight: 1.40,
		color: '#333333',
		mt: '60px',
		textalign: 'center',
		responsive: {
			small: {
				mt: '45px'
			}
		}
	},
	linkStyle: {
		layout: 'underline',
		hover: {
			layout: 2
		}
	}
}

export default FeaturesArea;