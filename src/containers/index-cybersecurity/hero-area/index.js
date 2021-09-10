import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Heading from "@ui/heading";
import Button from "@ui/button";
import { Container, Row, Col } from "@ui/wrapper";
import { HeroWrapper, HeroContent, HeroImagesWrap, HeroImageOne, HeroImageTwo } from './hero-area.style';

const HeroArea = (props) => {
	const heroData = useStaticQuery(graphql`
        query CybersecurityHeroQuery {
            indexCybersecurityJson(id: {eq: "cybersecurity-hero-content"}) {
                title
                subtitle
                path
                imageOne {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 779
							height: 748
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                imageTwo {
                    childImageSharp {					
						gatsbyImageData(
							layout: CONSTRAINED
							width: 513
							height: 582
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
            }
        }
    `)

	const { title, subtitle, path, imageOne, imageTwo } = heroData.indexCybersecurityJson;
	const { subtitleStyle, titleStyle } = props;
	return (
		<HeroWrapper>
			<Container fluid>
				<Row alignitems="center">
					<Col lg={6} md={7}>
						<HeroContent>
							{subtitle && <Heading {...subtitleStyle}>{parse(subtitle)}</Heading>}
							{title && <Heading {...titleStyle}>{parse(title)}</Heading>}
							{path && <Button hover="2" to={path}>Dig deeper now</Button>}
						</HeroContent>
					</Col>
					<Col lg={6} md={5}>
						<HeroImagesWrap>
							<HeroImageOne>
								<GatsbyImage className="worldRotate" image={getImage(imageOne)} alt="Hero Pattern" />
							</HeroImageOne>
							<HeroImageTwo>
								<GatsbyImage image={getImage(imageTwo)} alt="Hero" />
							</HeroImageTwo>
						</HeroImagesWrap>
					</Col>
				</Row>
			</Container>
		</HeroWrapper>
	)
}

HeroArea.defaultProps = {
	subtitleStyle: {
		as: 'h6',
		texttransform: 'uppercase',
		letterspacing: '3px',
		fontWeight: 700,
		fontSize: '14px',
		mb: '20px'
	},
	titleStyle: {
		as: 'h3',
		mb: '30px',
		child: {
			color: 'primary'
		}
	}
}

export default HeroArea
