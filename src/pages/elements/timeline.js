import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import TimelineArea from '@containers/elements/timeline'

const TimelinePage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Timeline" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Timeline"
			/>
			<main className="site-wrapper-reveal">
				<TimelineArea />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default TimelinePage
