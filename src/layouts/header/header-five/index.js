import React, { Fragment, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "@components/logo";
import SwiperSlider from "@ui/swiper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Social, { SocialLink } from "@ui/social";
import { MainMenu, MobileMenu } from "@components/menu";
import HeaderForm from "@components/forms/search-form/layout-two";
import BurgerButton from '@ui/burger-button'
import Clickable from "@ui/clickable"
import OffCanvas, { OffCanvasHeader, OffCanvasBody } from "@ui/off-canvas";
import {
	HeaderWrap,
	HeaderTop,
	HeaderMain,
	HeaderTopLeft,
	HeaderTopRight,
	HeaderTopRightInner,
	InfoItem,
	InfoIcon,
	InfoContent,
	HeaderBottom,
	HeaderBottomLeft,
	HeaderNavigation,
	HeaderBottomRight,
	HeaderElement
} from './header.style'

const Header = (props) => {
	const headerData = useStaticQuery(graphql`
        query HeaderFiveMenuQuery {
            allMenuJson {
                edges {
                    node {
                        id
                        text
                        link
                        submenu {
                            link
                            text
                        }
                        megamenu {
                            title
                            submenu {
                                link
                                text
                            }
                        }
                    }
                }
            }
            site {
                siteMetadata {
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
	const [offCanvasOpen, setOffcanvasOpen] = useState(false);
	const [headerInnerOpen, setHeaderInnerOpen] = useState(false);
	const [totalHeaderHeight, setTotalHeaderHeight] = useState(0);
	const [sticky, setSticky] = useState(false);
	const headerRef = useRef(null);
	const fixedRef = useRef(null);
	const offCanvasHandler = () => {
		setOffcanvasOpen(prevState => !prevState);
	}
	const headerInnerHandler = () => {
		setHeaderInnerOpen(prevState => !prevState);
	}

	useEffect(() => {
		setTotalHeaderHeight(headerRef.current.clientHeight)
	}, [totalHeaderHeight]);

	useEffect(() => {
		const scrollHandler = () => {
			let scrollPos = window.scrollY;
			if (scrollPos > totalHeaderHeight) {
				setSticky(true)
			} else {
				setSticky(false)
			}
		}
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		}
	}, [sticky, totalHeaderHeight]);

	const menuArr = headerData.allMenuJson.edges;
	const { facebook, twitter, instagram, linkedin } = headerData.site.siteMetadata.social;
	const { slider, headerTopStyles, menuStyle } = props;
	const { infoHeading, infoText, burgerBtnElStyle, clickAbleElStyle, clickAble, innerElementStyle } = headerTopStyles;

	return (
		<Fragment>
			<HeaderWrap ref={headerRef} isSticky={sticky}>
				<HeaderTop>
					<Container>
						<Row>
							<Col lg={12}>
								<HeaderMain top>
									<HeaderTopLeft>
										<Logo darkLogo />
									</HeaderTopLeft>
									<HeaderTopRight>
										<HeaderTopRightInner isOpen={headerInnerOpen}>
											<HeaderElement {...innerElementStyle} visibility={{ default: 'false', xs: 'true' }}>
												<HeaderForm inputId="header-search" />
											</HeaderElement>
											<HeaderElement {...innerElementStyle}>
												<SwiperSlider settings={slider} className="header-top-info-slider-wrap">
													<div className="item">
														<InfoItem>
															<InfoIcon>
																<i className="icon fa fa-map-marker-alt"></i>
															</InfoIcon>
															<InfoContent>
																<Heading {...infoHeading}>219 Amara Fort Apt. 394</Heading>
																<Text {...infoText}>New York, NY 941</Text>
															</InfoContent>
														</InfoItem>
													</div>
													<div className="item">
														<InfoItem>
															<InfoIcon>
																<i className="icon fa fa-clock"></i>
															</InfoIcon>
															<InfoContent>
																<Heading {...infoHeading}>8:00AM - 6:00PM</Heading>
																<Text {...infoText}>Monday to Saturday</Text>
															</InfoContent>
														</InfoItem>
													</div>
													<div className="item">
														<InfoItem>
															<InfoIcon>
																<i className="icon fa fa-comment-alt-lines"></i>
															</InfoIcon>
															<InfoContent>
																<Heading {...infoHeading}>Online 24/7</Heading>
																<Text {...infoText}>+122 123 4567</Text>
															</InfoContent>
														</InfoItem>
													</div>
													<div className="item">
														<InfoItem>
															<InfoIcon>
																<i className="icon fa fa-phone"></i>
															</InfoIcon>
															<InfoContent>
																<Heading {...infoHeading}>0122 8899900</Heading>
																<Text {...infoText}>Info@example.com</Text>
															</InfoContent>
														</InfoItem>
													</div>
												</SwiperSlider>
											</HeaderElement>
											<HeaderElement {...innerElementStyle}>
												<Social
													tooltip={true}
													tooltip_position="bottom-left"
													tooltip_bg="dark"
													space="20px"
												>
													{twitter && (
														<SocialLink path={twitter} title="Twitter">
															<i className="social-icon fab fa-twitter"></i>
														</SocialLink>
													)}
													{facebook && (
														<SocialLink path={facebook} title="Facebook">
															<i className="social-icon fab fa-facebook-f"></i>
														</SocialLink>
													)}
													{instagram && (
														<SocialLink path={instagram} title="Instagram">
															<i className="social-icon fab fa-instagram"></i>
														</SocialLink>
													)}
													{linkedin && (
														<SocialLink path={linkedin} title="Linkedin">
															<i className="social-icon fab fa-linkedin"></i>
														</SocialLink>
													)}
												</Social>
											</HeaderElement>
										</HeaderTopRightInner>
										<HeaderElement
											{...burgerBtnElStyle}
											visibility={{ default: 'false', lg: 'true' }}
										>
											<BurgerButton onClick={offCanvasHandler} />
										</HeaderElement>
										<HeaderElement
											{...clickAbleElStyle}
											visibility={{ default: 'false', sm: 'true' }}
										>
											<Clickable onClick={headerInnerHandler} {...clickAble}>
												<i className="far fa-ellipsis-h-alt"></i>
											</Clickable>
										</HeaderElement>
									</HeaderTopRight>
								</HeaderMain>
							</Col>
						</Row>
					</Container>
				</HeaderTop>
				<HeaderBottom ref={fixedRef} isSticky={sticky}>
					<Container>
						<Row>
							<Col lg={12}>
								<HeaderMain bottom>
									<HeaderBottomLeft>
										<HeaderNavigation>
											<MainMenu
												menuData={menuArr}
												blackColor={true}
												{...menuStyle}
											/>
										</HeaderNavigation>
									</HeaderBottomLeft>
									<HeaderBottomRight>
										<HeaderForm layout="white" inputId="header-search-2" />
									</HeaderBottomRight>
								</HeaderMain>
							</Col>
						</Row>
					</Container>
				</HeaderBottom>
			</HeaderWrap>
			<OffCanvas scrollable={true} isOpen={offCanvasOpen} onClick={offCanvasHandler}>
				<OffCanvasHeader onClick={offCanvasHandler}>
					<Logo darkLogo align={{ default: 'flex-start' }} />
				</OffCanvasHeader>
				<OffCanvasBody>
					<MobileMenu menuData={menuArr} />
				</OffCanvasBody>
			</OffCanvas>
		</Fragment>
	)
}

Header.propTypes = {
	slider: PropTypes.object
}

Header.defaultProps = {
	slider: {
		slidesPerView: 3,
		loop: true,
		spaceBetween: 0,
		pagination: false,
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			992: {
				slidesPerView: 2
			},
			1200: {
				slidesPerView: 3
			}
		}
	},
	headerTopStyles: {
		infoHeading: {
			fontSize: '14px',
			fontweight: 700,
			lineHeight: 1.18,
			mb: '6px'
		},
		infoText: {
			fontSize: '14px',
		},
		burgerBtnElStyle: {
			pl: '40px'
		},
		clickAbleElStyle: {
			pl: "15px"
		},
		clickAble: {
			fontsize: "30px",
			color: "#6D70A6"
		},
		innerElementStyle: {
			responsive: {
				small: {
					width: '100%'
				}
			}
		}
	},
	menuStyle: {
		alignment: "left",
		color: "#ffffffb3",
		hoverColor: "primary",
		barColor: "primary",
		vSpace: 42,
		submenu: {
			hoverColor: 'primary'
		}
	}
}


export default Header;