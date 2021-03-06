import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import SectionOne from '@containers/elements/dividers/section-one'
import SectionTwo from '@containers/elements/dividers/section-two'
import SectionThree from '@containers/elements/dividers/section-three'

const DividersPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Dividers" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Dividers"
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

export default DividersPage
