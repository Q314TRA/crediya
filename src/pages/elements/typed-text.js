import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import TypedText from '@containers/elements/typed-text'

const TypedTextPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Typed Text" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Typed Text"
			/>
			<main className="site-wrapper-reveal">
				<TypedText />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default TypedTextPage
