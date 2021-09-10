import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import FullWideSlider from '@containers/elements/flexible-image-slider/full-wide-slider'
import CarouselSlider from '@containers/elements/flexible-image-slider/carousel-slider'
import CenteredSlider from '@containers/elements/flexible-image-slider/centered-slider'
import FreeModeSlider from '@containers/elements/flexible-image-slider/freemode-slider'
import SmoothTransitionSlider from '@containers/elements/flexible-image-slider/smooth-transition-slider'
import Cta from "@containers/global/cta-area/section-one";

const FlexibleSliderPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Flexible Image Slider" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Flexible Image Slider"
			/>
			<main className="site-wrapper-reveal">
				<FullWideSlider />
				<CarouselSlider />
				<CenteredSlider />
				<FreeModeSlider />
				<SmoothTransitionSlider />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default FlexibleSliderPage
