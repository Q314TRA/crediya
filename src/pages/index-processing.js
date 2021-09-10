import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from '@layout/header/header-three'
import Footer from "@layout/footer/footer-one";
import HeroArea from '@containers/index-processing/hero-area'
import AboutArea from '@containers/index-processing/about-area'
import FeaturesArea from '@containers/index-processing/features-area'
import FunFactArea from '@containers/global/funfact-area/section-three'
import CTAArea from '@containers/index-processing/cta-area'
import ServicesArea from '@containers/index-processing/services-area'
import TestimonialArea from '@containers/global/testimonial-area/section-one'
import ClientsArea from '@containers/global/clients-area'
import ContactArea from '@containers/global/contact-area/contact-three'

const IndexProcessing = ({ location }) => (
	<Layout location={location}>
		<Seo title="Processing" />
		<Header />
		<main className="site-wrapper-reveal">
			<HeroArea />
			<AboutArea />
			<FeaturesArea />
			<FunFactArea />
			<CTAArea />
			<ServicesArea />
			<TestimonialArea />
			<ClientsArea />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default IndexProcessing
