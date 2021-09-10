import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import SectionOne from '@containers/elements/testimonials/section-one'
import SectionTwo from '@containers/elements/testimonials/section-two'

const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Testimonials" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Testimonials"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<SectionTwo />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
