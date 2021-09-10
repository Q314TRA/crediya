import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import SectionOne from '@containers/elements/lists/section-one'

const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="List Item" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="List Item"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
