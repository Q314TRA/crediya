import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from '@layout/header/header-five'
import Footer from "@layout/footer/footer-one";
import HeroArea from '@containers/index-cybersecurity/hero-area'
import AboutArea from '@containers/index-cybersecurity/about-area'
import ServicesArea from '@containers/index-cybersecurity/services-area'
import FeaturesArea from '@containers/index-cybersecurity/features-area'
import FunFactArea from '@containers/global/funfact-area/section-one'
import CaseStudyArea from '@containers/index-cybersecurity/case-study-area'
import PricingArea from '@containers/index-cybersecurity/pricing-area'
import BlogArea from '@containers/index-cybersecurity/blog-area'
import ClientsArea from '@containers/index-cybersecurity/clients-area'
import ContactFormArea from '@containers/index-cybersecurity/contact-form-area'
import ContactInfoArea from '@containers/global/contact-area/contact-two'

const IndexPage = ({ location }) => (
	<Layout location={location}>
		<Seo title="Cybersecurity" />
		<Header />
		<main className="site-wrapper-reveal">
			<HeroArea />
			<AboutArea />
			<ServicesArea />
			<FeaturesArea />
			<FunFactArea />
			<CaseStudyArea />
			<PricingArea />
			<BlogArea />
			<ClientsArea />
			<ContactFormArea />
			<ContactInfoArea />
		</main>
		<Footer />
	</Layout>
)

export default IndexPage
