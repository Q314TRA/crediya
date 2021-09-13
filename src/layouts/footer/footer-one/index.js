import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import parse from "html-react-parser";
import { Container } from "react-bootstrap";
import { Row, Col } from "@ui/wrapper";
import Text from "@ui/text";
import Anchor from '@ui/anchor'
import Button from '@ui/button'
import Heading from "@ui/heading";
import Social, { SocialLink } from '@ui/social'
import {
	FooterWrap,
	FooterTop,
	FooterWidget,
	LogoWidget,
	TextWidget,
	FooterWidgetList,
	FooterBottom
} from './footer.style'

const Footer = ({ copyrightStyle, ...props }) => {
	const siteInfo = useStaticQuery(graphql`
        query FooterSiteQuery {
            site {
                siteMetadata {
                    copyright
                    contact {
                        phone
                        email
                        address
                        website
                    }
                    social {
                        facebook
                        twitter
                        instagram
                        linkedin
                    }
                }
            }
        }      
    `)
	const { phone, email, address, website } = siteInfo.site.siteMetadata.contact;
	const { copyright } = siteInfo.site.siteMetadata;
	const { facebook, twitter, instagram, linkedin } = siteInfo.site.siteMetadata.social;
	return (
		<FooterWrap {...props}>
			<FooterTop>
				<Container>
					<Row>
						<Col lg={4} sm={6}>
							<FooterWidget responsive={{ medium: { mb: '31px' } }}>
								<LogoWidget>
									<StaticImage src="../../../assets/images/logo/logo_crediya_black.png" alt="logo" width={160} height={48} />
								</LogoWidget>
								<TextWidget>
									{address && <Text mb="10px">{address}</Text>}
									{email && <Text mb="10px"><Anchor path={`mailto:${email}`} color="textColor" hoverstyle="2">{email}</Anchor></Text>}
									{phone && <Text mb="10px"><Anchor path={`tel:${phone}`} fontWeight="800" color="#333" hoverstyle="2">{phone}</Anchor></Text>}
									{website && <Text mb="10px"><Anchor path={website} hoverstyle="2">{website}</Anchor></Text>}
								</TextWidget>
							</FooterWidget>
						</Col>
						<Col lg={2} md={4} sm={6}>
							<FooterWidget responsive={{ medium: { mb: '31px' } }}>
								<Heading as="h6" mt="-3px" mb="20px">Servicios</Heading>
								<FooterWidgetList>
									<li><Anchor path="/" color="textColor" hoverstyle="2">Asesoria financiera especializada</Anchor></li>
									<li><Anchor path="/" color="textColor" hoverstyle="2">Simulador de creditos</Anchor></li>
									<li><Anchor path="/" color="textColor" hoverstyle="2">Guia de entidades financieras</Anchor></li>
								</FooterWidgetList>
							</FooterWidget>
						</Col>
						<Col lg={2} md={4} sm={6}>
							<FooterWidget responsive={{ medium: { mb: '27px' } }}>
								<Heading as="h6" mt="-3px" mb="20px">Financieras</Heading>
								<FooterWidgetList>
									<li><Anchor path="/" color="textColor" hoverstyle="2">Sumate a nuestra plataforma</Anchor></li>
									<li><Anchor path="/" color="textColor" hoverstyle="2">Politicas de privacidad</Anchor></li>
									<li><Anchor path="/" color="textColor" hoverstyle="2">Terminos y condicioens</Anchor></li>
								</FooterWidgetList>
							</FooterWidget>
						</Col>
						<Col lg={2} md={4} sm={6}>
							<FooterWidget>
								<Heading as="h6" mt="-3px" mb="20px">Entérate</Heading>
								<FooterWidgetList>
									<li><Anchor path="/" color="textColor" hoverstyle="2">Blog</Anchor></li>
									<li><Anchor path="/" color="textColor" hoverstyle="2">Preguntas frecuentes</Anchor></li>
									<li><Anchor path="/" color="textColor" hoverstyle="2">Contáctanos</Anchor></li>
								</FooterWidgetList>
							</FooterWidget>
						</Col>
						<Col lg={2} md={4} sm={6}>
							<FooterWidget mt='50px' responsive={{ small: { mt: '34px' } }}>
								<FooterWidgetList>
									<li>
										<Button path="/" to="/" imgbutton="true" shadow="true">
											<StaticImage src="../../../assets//images/icons/aeroland-button-google-play.jpg" alt="Google Play" width={162} height={48} />
										</Button>
									</li>
									<li>
										<Button path="/" to="/" imgbutton="true" shadow="true">
											<StaticImage src="../../../assets//images/icons/aeroland-button-app-store.jpg" alt="App Store" width={162} height={48} />
										</Button>
									</li>
								</FooterWidgetList>
							</FooterWidget>
						</Col>
					</Row>
				</Container>
			</FooterTop>
			<FooterBottom>
				<Container>
					<Row className="align-items-center">
						<Col md={6} className="text-center text-md-left">
							{copyright && <Text {...copyrightStyle}>&copy; {new Date().getFullYear()} {parse(copyright)}</Text>}
						</Col>
						<Col md={6} className="text-center text-md-right">
							<Social space="8px" tooltip={true} shape="rounded" varient="outlined">
								{twitter && (
									<SocialLink
										path={twitter}
										title="Twitter">
										<i className="fab fa-twitter link-icon"></i>
									</SocialLink>
								)}
								{facebook && (
									<SocialLink
										path={facebook}
										title="Facebook">
										<i className="fab fa-facebook-f link-icon"></i>
									</SocialLink>
								)}
								{instagram && (
									<SocialLink
										path={instagram}
										title="Instagram">
										<i className="fab fa-instagram link-icon"></i>
									</SocialLink>
								)}
								{linkedin && (
									<SocialLink
										path={linkedin}
										title="Linkedin">
										<i className="fab fa-linkedin link-icon"></i>
									</SocialLink>
								)}
							</Social>
						</Col>
					</Row>
				</Container>
			</FooterBottom>
		</FooterWrap>
	)
}

Footer.propTypes = {
	bgcolor: PropTypes.string,
	reveal: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

Footer.defaultProps = {
	bgcolor: '#F8F8F8',
	reveal: 'false',
	copyrightStyle: {
		responsive: {
			small: {
				pb: '15px'
			}
		}
	}
};

export default Footer
