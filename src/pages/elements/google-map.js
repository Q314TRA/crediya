import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import SectionOne from '@containers/elements/google-map/section-one'
import SectionTwo from '@containers/elements/google-map/section-two'
import Cta from "@containers/global/cta-area/section-one";

const GoogleMapPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Google Map" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Google Map"
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

export default GoogleMapPage
