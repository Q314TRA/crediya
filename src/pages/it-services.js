import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import ServicesArea from '@containers/it-services/services-area'
import ContactArea from '@containers/global/contact-area/contact-two'

const ITServicePage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="IT Services" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="IT Services"
		/>
		<main className="site-wrapper-reveal">
			<ServicesArea />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default ITServicePage
