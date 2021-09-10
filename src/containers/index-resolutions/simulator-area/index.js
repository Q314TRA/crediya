import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import SectionTitle from "@ui/section-title";
import Counter from "@components/counter/layout-three";
import AppointmentForm from "@components/forms/appointment-form";
import { SectionWrap, HeaderWrap, AppointmentFormWrap } from './section.style'

const Section = ({ markHeading, headingStyle, sectionTitleStyle }) => {
	const simulatorQueryData = useStaticQuery(graphql`
        query ResolutionsSimulatorQuery {
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
	return (
		<SectionWrap>
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
					<Col lg={{ span: 4, offset: 4 }} md={8}>
						<AppointmentFormWrap>
							<AppointmentForm />
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
		mb: '120px',
		responsive: {
			small: {
				mb: '80px'
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