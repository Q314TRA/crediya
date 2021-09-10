import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import SectionOne from '@containers/elements/client-logo/section-one'
import SectionTwo from '@containers/elements/client-logo/section-two'
import SectionThree from '@containers/elements/client-logo/section-three'
import SectionFour from '@containers/elements/client-logo/section-four'

const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Client Logo" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Client Logo"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
