import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import CaseStudyBox from "@components/box-large-image/layout-two";
import SwiperSlider from "@ui/swiper";
import { CaseStudyWrapper } from './case-study-area.style'

const CaseStudySection = ({
	sectionStyle,
	sectionTitleStyle,
	bottomRowStyle,
	bottomTextStyle,
	bottoTextLinkStyle,
	caseStudyStyles,
	slider,
	sliderStyle }) => {
	const caseStudyData = useStaticQuery(graphql`
    query AppointmentCaseStudyQuery {
        indexAppointmentJson(id: {eq: "appointment-case-section"}) {
			id
			title
			subtitle
			bottom_text
			bottom_link_text
			bottom_link
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
        allCaseStudiesJson(filter: {is_featured: {eq: true}}, limit: 4) {
            edges {
              node {
                fields{
                    slug
                }
                id
                title
                category
                excerpt
                image{
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
	const caseStudySecData = caseStudyData.indexAppointmentJson;
	const caseStudies = caseStudyData.allCaseStudiesJson.edges;
	const bgImage = convertToBgImage(getImage(caseStudySecData.bgImage))

	return (
		<CaseStudyWrapper {...bgImage}>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							{...sectionTitleStyle}
							title={caseStudySecData.title}
							subtitle={caseStudySecData.subtitle}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<SwiperSlider {...sliderStyle} settings={slider}>
							{caseStudies.map(caseStudy => (
								<div className="item" key={caseStudy.node.fields.slug}>
									<CaseStudyBox
										{...caseStudyStyles}
										imageSrc={caseStudy.node.image}
										title={caseStudy.node.title}
										category={caseStudy.node.category}
										desc={caseStudy.node.excerpt}
										path={`/case-study/${caseStudy.node.fields.slug}`}
										btnText="View case study"
									/>
								</div>
							))}
						</SwiperSlider>
					</Col>
				</Row>
				<Row {...bottomRowStyle}>
					<Col lg={12}>
						<Text {...bottomTextStyle}>
							{caseStudySecData.bottom_text}
							<Anchor {...bottoTextLinkStyle} path={caseStudySecData.bottom_link}>{caseStudySecData.bottom_link_text}</Anchor>
						</Text>
					</Col>
				</Row>
			</Container>
		</CaseStudyWrapper>
	)
}

CaseStudySection.propTypes = {
	sectionTitleStyle: PropTypes.object,
	bottomTextStyle: PropTypes.object,
	bottoTextLinkStyle: PropTypes.object
}

CaseStudySection.defaultProps = {
	sectionTitleStyle: {
		mb: '40px',
		responsive: {
			small: {
				mb: '30px'
			}
		}
	},
	bottomTextStyle: {
		fontSize: '18px',
		fontweight: 500,
		lineHeight: 1.40,
		color: '#333333',
		mt: '40px',
		align: 'center'
	},
	bottoTextLinkStyle: {
		fontWeight: 500,
		layout: 'underline',
		hover: {
			layout: 2
		}
	},
	slider: {
		slidesPerView: 3,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 2
			},
			1200: {
				slidesPerView: 3
			}
		}
	},
	sliderStyle: {
		pagination: {
			bottom: 0
		}
	},
	caseStudyStyles: {
		boxStyle: {
			mt: '20px',
			mb: '35px',
			ml: '15px',
			mr: '15px'
		},
		contentBoxStyle: {
			pt: '25px',
			pl: '26px',
			pr: '26px',
			textalign: 'left'
		},
		headingStyle: {
			as: 'h6',
			fontweight: 600,
			mb: '2px'
		},
		descStyle: {
			mb: 0,
			mt: '13px'
		}
	}
}

export default CaseStudySection;