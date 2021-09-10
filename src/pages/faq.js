import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import FaqSectionOne from '@containers/faq/section-one'
import FaqSectionTwo from '@containers/faq/section-two'
import ContactArea from '@containers/global/contact-area/contact-one'

const FAQPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Faq" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Faq"
		/>
		<main className="site-wrapper-reveal">
			<FaqSectionOne />
			<FaqSectionTwo />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default FAQPage