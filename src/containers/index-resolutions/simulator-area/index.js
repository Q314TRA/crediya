import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import SectionTitle from "@ui/section-title";
import Counter from "@components/counter/layout-three";
import SimulatorForm from "@components/forms/simulator-form";
import { SectionWrap, HeaderWrap, AppointmentFormWrap } from './section.style'
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";

const Section = ({ markHeading, headingStyle, sectionTitleStyle }) => {
	const simulatorQueryData = useStaticQuery(graphql`
        query ResolutionsSimulatorQuery {
            sectionBgSimulatorArea: file(relativePath: {eq: "images/bg/cybersecurity-global-image.png"}) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 1192
						height: 730
						placeholder: TRACED_SVG
						formats: WEBP
						quality: 100
					)
				}
			}
			allFunFactJson {
                edges {
                    node {
                        count
                        title
                    }
                }
            }
        }
    `);
	const data = simulatorQueryData.allFunFactJson.edges;
	const imageData = convertToBgImage(getImage(simulatorQueryData.sectionBgSimulatorArea));
	return (
		<SectionWrap {...imageData}>
			<Container>

				<Row>
					<Col lg={12}>
						<SectionTitle
							{...sectionTitleStyle}
							title={'<span>Simula</span> tu credito e inicia tu proceso, <span>¡hoy mismo!</span>.'}
							subtitle={'SIMULADOR'}
						/>
					</Col>
				</Row>

				<Row>
					<Col lg={{ span: 8, offset: 2 }} md={8}>
						<AppointmentFormWrap>
							<SimulatorForm />
						</AppointmentFormWrap>

					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

Section.propTypes = {
	markHeading: PropTypes.object,
	headingStyle: PropTypes.object,
	sectionTitleStyle: PropTypes.object,
}

Section.defaultProps = {
	sectionTitleStyle: {
		mb: '80px',
		responsive: {
			small: {
				mb: '60px'
			}
		}
	},
	markHeading: {
		layout: 'highlight',
	},
	headingStyle: {
		as: 'h3',
		mt: '25px',
		fontSize: '38px',
		child: {
			color: 'primary'
		},
		responsive: {
			large: {
				fontSize: '30px'
			},
			small: {
				fontSize: '24px'
			}
		}
	}
}


export default Section;