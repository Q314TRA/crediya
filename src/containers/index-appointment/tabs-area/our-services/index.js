import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "@ui/wrapper";
import ServiceBox from "@components/box-large-image/layout-three";
import { OurServicesWrap } from './our-services.style'

const OurServices = ({ serviceBoxStyle }) => {
	const servicesQueryData = useStaticQuery(graphql`
        query ServicesQueryData {
            allItServicesJson(sort: {order: DESC, fields: id}, filter: {is_featured: {eq: false}}) {
                edges {
                  node {
                    fields{
                        slug
                    }
                    id
                    title
                    excerpt
                    image {
                      childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 480
							height: 298
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
    `);
	const servicesData = servicesQueryData.allItServicesJson.edges;

	return (
		<OurServicesWrap>
			<Row>
				{servicesData.map((service, i) => {
					return (
						<Col key={service.node.id} lg={4} md={6}>
							<ServiceBox
								{...serviceBoxStyle}
								title={service.node.title}
								desc={service.node.excerpt}
								imageSrc={service.node.image}
								path={`/it-service/${service.node.fields.slug}`}
							/>
						</Col>
					)
				})}

			</Row>
		</OurServicesWrap>
	)
}

OurServices.propTypes = {
	serviceBoxStyle: PropTypes.object
}

OurServices.defaultProps = {
	serviceBoxStyle: {
		boxStyle: {
			responsive: {
				medium: {
					mb: '42px'
				}
			}
		}
	}
}

export default OurServices;