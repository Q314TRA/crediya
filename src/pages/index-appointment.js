import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from '@layout/header/header-two'
import Footer from "@layout/footer/footer-one";
import HeroArea from '@containers/index-appointment/hero-area'
import ServicesArea from '@containers/index-appointment/services-area'
import TabsArea from '@containers/index-appointment/tabs-area'
import TeamsArea from '@containers/index-appointment/team-area'
import CTAArea from '@containers/global/cta-area/section-two'
import CaseStudyArea from '@containers/index-appointment/case-study-area'
import TestimonialArea from '@containers/global/testimonial-area/section-one'
import FunFactArea from '@containers/global/funfact-area/section-one'
import ContactArea from '@containers/index-appointment/contact-area'

const IndexPage = ({ location }) => (
	<Layout location={location}>
		<Seo title="Appointment" />
		<Header />
		<main className="site-wrapper-reveal">
			<HeroArea />
			<ServicesArea />
			<TabsArea />
			<TeamsArea />
			<CTAArea />
			<CaseStudyArea />
			<TestimonialArea />
			<FunFactArea />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default IndexPage
