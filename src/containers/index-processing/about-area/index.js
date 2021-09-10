import React, { Fragment, useState } from 'react'
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import AccordionWrap from "@ui/accordion";
import VideoButton from "@ui/video-button";
import ModalVideo from "@ui/modal-video";
import {
	AboutAreaWrap,
	AboutTextBox,
	AboutImageBox,
	ImageBox1,
	ImageBox2,
	ImageBox3,
	ImageBox4,
	MainImageBox,
	VideoBtnWrap
} from './about-area.style'

const AboutArea = ({ sectionTitleStyle }) => {
	const AboutData = useStaticQuery(graphql`
        query ProcessingAboutQuery {
            indexProcessingJson(id: {eq: "processing-about-content"}) {
                title
                subtitle
                video_link
                faq {
                    id
                    content
                    title
                }
                image1 {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 310
							height: 190
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                image2 {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 188
							height: 115
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                image3 {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 188
							height: 115
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                image4 {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 190
							height: 190
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                main_image {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 570
							height: 350
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
            }
        }      
    `);
	const { title, subtitle, video_link, faq, image1, image2, image3, image4, main_image } = AboutData.indexProcessingJson;
	let video_arr, video_id, video_channel;
	if (video_link) {
		video_arr = video_link.split('=', -1);
		video_id = video_arr[1];
		video_channel = video_link.split(".")[1];
	}
	const [videoOpen, setVideoOpen] = useState(false);
	const modalVideoOpen = () => {
		setVideoOpen(true)
	}

	const modalVideoClose = () => {
		setVideoOpen(false)
	}
	return (
		<Fragment>
			<AboutAreaWrap>
				<Container fluid>
					<Row alignitems="center">
						<Col lg={6}>
							<AboutTextBox>
								<SectionTitle
									{...sectionTitleStyle}
									title={title}
									subtitle={subtitle}
								/>
								{faq && (
									<AccordionWrap>
										<Accordion allowZeroExpanded preExpanded={[0]}>
											{
												faq.map((el, index) => {
													return (
														<AccordionItem id={el.id} key={index}>
															<AccordionItemHeading>
																<AccordionItemButton>
																	{el.title}
																</AccordionItemButton>
															</AccordionItemHeading>
															<AccordionItemPanel>
																<p>{el.content}</p>
															</AccordionItemPanel>
														</AccordionItem>
													)
												})
											}
										</Accordion>
									</AccordionWrap>
								)}
							</AboutTextBox>
						</Col>
						<Col lg={6}>
							<AboutImageBox>
								{image1 && (
									<ImageBox1 className="animation_image one">
										<GatsbyImage image={getImage(image1)} alt="About Banner" />
									</ImageBox1>
								)}
								{image2 && (
									<ImageBox2 className="animation_image two">
										<GatsbyImage image={getImage(image2)} alt="About Banner" />
									</ImageBox2>
								)}
								{main_image && (
									<MainImageBox>
										<GatsbyImage image={getImage(main_image)} alt="About Banner" />
										{video_link && (
											<VideoBtnWrap>
												<VideoButton
													skin="primary"
													onClick={modalVideoOpen}
												/>
											</VideoBtnWrap>
										)}
									</MainImageBox>
								)}
								{image3 && (
									<ImageBox3 className="animation_image three">
										<GatsbyImage image={getImage(image3)} alt="About Banner" />
									</ImageBox3>
								)}
								{image4 && (
									<ImageBox4 className="animation_image four">
										<GatsbyImage image={getImage(image4)} alt="About Banner" />
									</ImageBox4>
								)}
							</AboutImageBox>
						</Col>
					</Row>
				</Container>
			</AboutAreaWrap>
			<ModalVideo
				channel={video_channel}
				videoId={video_id}
				isOpen={videoOpen}
				onClose={modalVideoClose}
			/>
		</Fragment>
	)
}

AboutArea.propTypes = {
	sectionTitleStyle: PropTypes.object
}

AboutArea.defaultProps = {
	sectionTitleStyle: {
		mb: '40px',
		align: 'left'
	}
}

export default AboutArea;