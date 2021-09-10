import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import PricingTab from '@containers/pricing-plan'
import ContactArea from '@containers/global/contact-area/contact-two'

const PricingPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Our Pricing Plan" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Our Pricing Plan"
		/>
		<main className="site-wrapper-reveal">
			<PricingTab />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default PricingPage
