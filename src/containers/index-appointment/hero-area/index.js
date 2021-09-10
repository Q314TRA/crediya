import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import VideoButton from "@ui/video-button";
import ModalVideo from "@ui/modal-video";
import AppointmentForm from "@components/forms/appointment-form";
import {
	HeroWrapper,
	HeroTextWrap,
	HeroButton,
	AppointmentWrap,
	AppointmentTitleWrap,
	AppointmentFormWrap
} from './hero-area.style'

const Hero = ({ subtitleStyle, titleStyle }) => {

	const heroData = useStaticQuery(graphql`
    query HeroQuery {
        indexAppointmentJson(id: {eq: "appointment-hero-content"}) {
          id
          title
          subtitle
          video
          buttonText
          bgImage {
            childImageSharp {
				gatsbyImageData(
					layout: FULL_WIDTH
					formats: WEBP
					placeholder: TRACED_SVG
					quality: 100
				)
            }
          }
        }
      } 
    `);

	const [videoOpen, setVideoOpen] = useState(false);

	const data = heroData.indexAppointmentJson;
	const bgImage = convertToBgImage(getImage(data.bgImage))

	const modalVideoOpen = () => {
		setVideoOpen(true)
	}

	const modalVideoClose = () => {
		setVideoOpen(false)
	}

	return (
		<Fragment>
			<HeroWrapper {...bgImage}>
				<Container>
					<Row alignitems="center">
						<Col md={6}>
							<HeroTextWrap>
								<Heading {...subtitleStyle}>{data.subtitle}</Heading>
								<Heading {...titleStyle}>{data.title}</Heading>
								<HeroButton>
									<VideoButton
										onClick={modalVideoOpen}
										text="How we work"
									/>
								</HeroButton>
							</HeroTextWrap>
						</Col>
						<Col lg={5} md={6} className="mx-auto">
							<AppointmentWrap>
								<AppointmentTitleWrap>
									<Heading as="h5" mb="10px">Book appointment</Heading>
									<Text>It's out pleasure to have a chance to cooperate.</Text>
								</AppointmentTitleWrap>
								<AppointmentFormWrap>
									<AppointmentForm />
								</AppointmentFormWrap>
							</AppointmentWrap>
						</Col>
					</Row>
				</Container>
			</HeroWrapper>
			<ModalVideo
				channel='youtube'
				videoId='L61p2uyiMSo'
				isOpen={videoOpen}
				onClose={modalVideoClose}
			/>
		</Fragment>
	)
}

Hero.propTypes = {
	subtitleStyle: PropTypes.object,
	titleStyle: PropTypes.object
}

Hero.defaultProps = {
	subtitleStyle: {
		as: 'h6',
		color: '#fff'
	},
	titleStyle: {
		as: 'h1',
		color: '#fff',
		fontweight: 500,
		mb: '30px'
	}
}

export default Hero;