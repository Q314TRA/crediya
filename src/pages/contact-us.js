import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import CTAArea from "@containers/global/cta-area/section-one";
import ContactFormArea from '@containers/contact-us/contact-form-area'
import ContactInfoArea from '@containers/contact-us/contact-info-area'

const ContactUsPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Contact Us" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Contact Us"
		/>
		<main className="site-wrapper-reveal">
			<ContactFormArea />
			<ContactInfoArea />
			<CTAArea />
		</main>
		<Footer />
	</Layout>
)

export default ContactUsPage