import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import SectionOne from '@containers/elements/box-image/section-one'
import SectionTwo from '@containers/elements/box-image/section-two'
import SectionThree from '@containers/elements/box-image/section-three'
import SectionFour from '@containers/elements/box-image/section-four'
import SectionFive from '@containers/elements/box-image/section-five'
import SectionSix from '@containers/elements/box-image/section-six'
import SectionSeven from '@containers/elements/box-image/section-seven'

const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Box Image" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Box Image"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
				<SectionFive />
				<SectionSix />
				<SectionSeven />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
