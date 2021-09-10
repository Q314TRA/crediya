import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col, Box } from "@ui/wrapper";
import Heading from "@ui/heading";
import VideoButton from "@ui/video-button";
import ModalVideo from "@ui/modal-video";
import { SectionWrap } from './video-area.style'

const VideoArea = ({ sectionStyle, titleStyle }) => {
	const infoTechVideoDataQuery = useStaticQuery(graphql`
        query infotechnoVideoQueryData {
            indexInfotechnoJson(id: {eq: "infotechno-video-content"}) {
                title
                bgImage{
                    childImageSharp{
						gatsbyImageData(
							layout: FULL_WIDTH
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                video_link
            }
        }
    `);

	const imageData = convertToBgImage(getImage(infoTechVideoDataQuery.indexInfotechnoJson.bgImage))
	const { title, video_link } = infoTechVideoDataQuery.indexInfotechnoJson;
	const [videoOpen, setVideoOpen] = useState(false);
	const modalVideoOpen = () => {
		setVideoOpen(true)
	}
	const modalVideoClose = () => {
		setVideoOpen(false)
	}

	return (
		<Fragment>
			<SectionWrap {...imageData}>
				<Container>
					<Row>
						<Col lg={6} md={10} xs={11} ml="auto">
							<Box>
								{title && <Heading {...titleStyle}>{parse(title)}</Heading>}
								{video_link && (
									<VideoButton
										skin="primary"
										textStyle={2}
										onClick={modalVideoOpen}
										text="Watch Video <br/> Intro"
									/>
								)}
							</Box>
						</Col>
					</Row>
				</Container>
			</SectionWrap>
			<ModalVideo
				channel='youtube'
				videoId='L61p2uyiMSo'
				isOpen={videoOpen}
				onClose={modalVideoClose}
			/>
		</Fragment>
	)
}

VideoArea.propTypes = {
	sectionStyle: PropTypes.object,
	titleStyle: PropTypes.object
}

VideoArea.defaultProps = {
	sectionStyle: {

	},
	titleStyle: {
		lineHeight: 1.34,
		fontweight: 600,
		color: '#fff',
		mb: '65px'
	}
}

export default VideoArea;