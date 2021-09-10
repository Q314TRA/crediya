import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import SectionOne from '@containers/elements/accordion/section-one'
import SectionTwo from '@containers/elements/accordion/section-two'

const AccordionsPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Accordions" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Accordions"
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

export default AccordionsPage
