import React, { Fragment, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "@components/logo";
import Button from "@ui/button";
import Clickable from "@ui/clickable";
import BurgerButton from "@ui/burger-button";
import OffCanvas, { OffCanvasHeader, OffCanvasBody } from "@ui/off-canvas";
import { MainMenu, MobileMenu } from "@components/menu"
import {
	HeaderWrap,
	HeaderOuter,
	FixedHeader,
	HeaderMain,
	HeaderLeft,
	HeaderMiddle,
	HeaderRight,
	HeaderRightInner,
	HeaderNavigation,
	HeaderElement,
	FixedHeaderHeight
} from './header.style'

const Header = (props) => {
	const [offCanvasOpen, setOffcanvasOpen] = useState(false);
	const [headerInnerOpen, setHeaderInnerOpen] = useState(false);
	const [fixedHeaderHeight, setFixedHeaderHeight] = useState(0);
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
		setFixedHeaderHeight(fixedRef.current.clientHeight);
		setTotalHeaderHeight(headerRef.current.clientHeight)
	}, [fixedHeaderHeight]);

	useEffect(() => {
		const scrollHandler = () => {
			let scrollPos = window.scrollY;
			if (scrollPos > totalHeaderHeight) {
				setSticky(true)
			}

			if (scrollPos < fixedHeaderHeight) {
				setSticky(false)
			}
		}
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		}
	}, [sticky, totalHeaderHeight, fixedHeaderHeight]);

	const menuData = useStaticQuery(graphql`
        query GET_LANDING_MENU {
            allMenuSimplifyJson {
                edges {
                    node {
                        id
                        text
                        link
                        submenu {
                            link
                            text
                        }
                    }
                }
            }
        } 
    `)

	const menuArr = menuData.allMenuSimplifyJson.edges;
	const { headerStyle, transparent } = props;
	const { logoStyle, burgerBtnElStyle, clickAbleElStyle, clickAble } = headerStyle;

	return (
		<Fragment>
			<HeaderWrap transparent={transparent} ref={headerRef} isSticky={sticky}>
				<HeaderOuter>
					<FixedHeader ref={fixedRef}>
						<Container fluid className="xp-150">
							<Row>
								<Col lg={12}>
									<HeaderMain>
										<HeaderLeft>
											<Logo {...logoStyle} whiteLogo={transparent && !sticky} />
										</HeaderLeft>
										<HeaderMiddle>
											<HeaderNavigation>
												<MainMenu
													menuData={menuArr}
													layout={4}
													whiteColor={!sticky}
													isSticky={sticky}
												/>
											</HeaderNavigation>
										</HeaderMiddle>
										<HeaderRight>
											<HeaderRightInner isOpen={headerInnerOpen}>
												<HeaderElement>
													<Button
														stickyBtn={sticky}
														to="https://1.envato.market/3bOdB"
														target="_blank"
														rel="noopener noreferrer"
													>Descarga Crediya</Button>
												</HeaderElement>
											</HeaderRightInner>
											<HeaderElement
												{...burgerBtnElStyle}
												visibility={{ default: 'false', lg: 'true' }}
											>
												<BurgerButton whiteColor={!sticky} onClick={offCanvasHandler} />
											</HeaderElement>
											<HeaderElement
												{...clickAbleElStyle}
												visibility={{ default: 'false', sm: 'true' }}
											>
												<Clickable onClick={headerInnerHandler} {...clickAble}>
													<i className="far fa-ellipsis-h-alt"></i>
												</Clickable>
											</HeaderElement>
										</HeaderRight>
									</HeaderMain>
								</Col>
							</Row>
						</Container>
					</FixedHeader>
					<FixedHeaderHeight height={fixedHeaderHeight} />
				</HeaderOuter>
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
	headerStyle: PropTypes.object
}

Header.defaultProps = {
	headerStyle: {
		logoStyle: {
			align: {
				default: 'flex-start'
			}
		},
		burgerBtnElStyle: {
			pl: '30px'
		},
		clickAbleElStyle: {
			pl: "15px"
		},
		clickAble: {
			fontsize: "20px",
			color: "#6D70A6"
		}
	}
}

export default Header
