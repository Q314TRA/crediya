import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from '@layout/header/header-four'
import Footer from "@layout/footer/footer-one";
import Hero from '@containers/landing/hero'
import HeroArea from '@containers/index-resolutions/hero-area'
import FeaturesArea from '@containers/index-resolutions/features-area'
import FeaturesAreaSimply from '@containers/index-infotechno/features-area'
import FunFactArea from '@containers/index-resolutions/funfact-area'
import SimulatorArea from '@containers/index-resolutions/simulator-area'

import AboutArea from '@containers/index-infotechno/about-area'

import ServicesArea from '@containers/index-resolutions/services-area'
import ContactArea from '@containers/global/contact-area/contact-three'
// import ContactAreaForm from '@containers/index-appointment/contact-area'

import TestimonialArea from '@containers/global/testimonial-area/section-one'
import WhatsnewArea from '@containers/index-resolutions/whats-new-area'
import CTAArea from "@containers/global/cta-area/section-one";
import ClientsArea from '@containers/global/clients-area'


const IndexServices = ({ location, pageFromCMS }) => (
	<Layout location={location}>
		<Seo title="Resolutions" />
		<Header transparent />
		<main className="site-wrapper-reveal">
			<Hero />

			<ClientsArea />
				<FeaturesAreaSimply />

			{/* <HeroArea /> */}
			{/* <FeaturesArea /> */}
			<SimulatorArea />
			<AboutArea />
			<ServicesArea />
			{/* <FunFactArea /> */}
			
			<ContactArea />
			<TestimonialArea />
			<WhatsnewArea />
			<CTAArea />
			<ClientsArea />
			{/* <ContactAreaForm /> */}
		</main>
		<Footer />
	</Layout>
)

export default IndexServices
