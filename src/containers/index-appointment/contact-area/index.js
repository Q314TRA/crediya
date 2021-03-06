import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import ConsultForm from "@components/forms/consult-form";
import Heading from "@ui/heading";
import Anchor from "@ui/anchor";
import Text from "@ui/text";
import LocationButton from "@ui/location-button";
import { ContactWrapper, ContactInfoBox } from './contact-area.style'

const ContactSection = ({ sectionTitleStyle, conactInfoStyles }) => {
	const { titleStyle, phoneStyle, phoneAnchorStyle, btnStyle } = conactInfoStyles;
	const contacInfoData = useStaticQuery(graphql`
    query ContactInfoQuery {
        indexAppointmentJson(id: {eq: "appointment-contact-section"}) {
            title
            subtitle
            contact_info{
              title
              phone
              text
            }
            bgImage {
                childImageSharp {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: TRACED_SVG
						formats: WEBP
						quality: 100
					)
                }
            }
        }
      } 
    `);
	const contactSecData = contacInfoData.indexAppointmentJson;
	const conactInfo = contactSecData.contact_info;
	const bgImage = convertToBgImage(getImage(contactSecData.bgImage))

	return (
		<ContactWrapper {...bgImage}>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							{...sectionTitleStyle}
							title={contactSecData.title}
							subtitle={contactSecData.subtitle}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={6}>
						<ConsultForm />
					</Col>
					<Col lg={5} ml="auto">
						<ContactInfoBox>
							<Heading {...titleStyle}>{conactInfo.title}</Heading>
							<Heading {...phoneStyle}><Anchor path="/" {...phoneAnchorStyle}>{conactInfo.phone}</Anchor></Heading>
							<Text>{conactInfo.text}</Text>
							<LocationButton {...btnStyle} />
						</ContactInfoBox>
					</Col>
				</Row>
			</Container>
		</ContactWrapper>
	)
}

ContactSection.porpTypes = {
	sectionTitleStyle: PropTypes.object,
	conactInfoStyles: PropTypes.object
}

ContactSection.defaultProps = {
	sectionTitleStyle: {
		mb: '53px',
		layout: 2,
		align: 'left',
		responsive: {
			small: {
				mb: '30px'
			}
		}
	},
	conactInfoStyles: {
		titleStyle: {
			as: 'h6',
			mb: '30px',
			fontSize: '15px',
			letterspacing: '2px',
			texttransform: 'uppercase',
			fontweight: 500
		},
		phoneStyle: {
			as: 'h3',
			mb: '20px'
		},
		phoneAnchorStyle: {
			color: '#002fa6',
			hover: {
				layout: 2,
				color: '#002fa6'
			}
		},
		btnStyle: {
			mt: "20px"
		}
	}
}

export default ContactSection;