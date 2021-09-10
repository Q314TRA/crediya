import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import ButtonSection from '@containers/elements/button/button-section'

const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Buttons" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Buttons"
			/>
			<main className="site-wrapper-reveal">
				<ButtonSection />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
