import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Gradation from '@containers/elements/gradation'
import Cta from "@containers/global/cta-area/section-one";

const GoogleMapPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Gradation" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Gradation"
			/>
			<main className="site-wrapper-reveal">
				<Gradation />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default GoogleMapPage
