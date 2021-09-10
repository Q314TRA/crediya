import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import PopupArea from '@containers/elements/popup-video'
import Cta from "@containers/global/cta-area/section-one";

const PopupVideoPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Popup Video" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Popup Video"
			/>
			<main className="site-wrapper-reveal">
				<PopupArea />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default PopupVideoPage
