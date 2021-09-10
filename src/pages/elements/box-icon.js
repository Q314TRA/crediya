import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import SectionOne from '@containers/elements/box-icon/section-one'
import SectionTwo from '@containers/elements/box-icon/section-two'
import SectionThree from '@containers/elements/box-icon/section-three'

const BoxIconPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Box Icon" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Box Icon"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default BoxIconPage
