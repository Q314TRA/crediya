import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import { HeroWrapper, HeroTextBox, ImageBoxWrap, ImageBoxOne, ImageBoxTwo } from './hero-area.style'

const HeroArea = (props) => {
	const heroDataQuery = useStaticQuery(graphql`
        query heroQueryData {
            indexInfotechnoJson(id: {eq: "infotechno-hero-content"}) {
                title
                subtitle
                shortDesc
                path
                image1 {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 521
							height: 503
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
							width: 706
							height: 741
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
            }
        }
    `);
	const { title, subtitle, shortDesc, path, image1, image2 } = heroDataQuery.indexInfotechnoJson;
	const { subtitleStyle, titleStyle, btnStyle } = props;

	return (
		<HeroWrapper>
			<Container fluid>
				<Row alignitems="center">
					<Col md={6}>
						<HeroTextBox>
							{subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
							{title && <Heading {...titleStyle}>{parse(title)}</Heading>}
							{shortDesc && <Text>{shortDesc}</Text>}
							{path && <Button {...btnStyle} to={path}>Get Details</Button>}
						</HeroTextBox>
					</Col>
					<Col md={6}>
						<ImageBoxWrap>
							{image1 && (
								<ImageBoxOne>
									<GatsbyImage image={getImage(image1)} alt="Infotechno" />
								</ImageBoxOne>
							)}
							{image2 && (
								<ImageBoxTwo>
									<GatsbyImage image={getImage(image2)} alt="Infotechno" />
								</ImageBoxTwo>
							)}
						</ImageBoxWrap>
					</Col>
				</Row>
			</Container>
		</HeroWrapper>
	)
}

HeroArea.propTypes = {
	subtitleStyle: PropTypes.object,
	titleStyle: PropTypes.object,
	btnStyle: PropTypes.object
}

HeroArea.defaultProps = {
	subtitleStyle: {
		as: 'h6',
		color: 'primary',
		fontweight: 500,
		mb: '20px'
	},
	titleStyle: {
		as: 'h1',
		mb: '15px',
		fontweight: 500
	},
	btnStyle: {
		hover: '2',
		mt: '15px'
	}
}

export default HeroArea;