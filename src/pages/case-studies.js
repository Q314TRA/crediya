import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import CaseStudyArea from '@containers/global/case-study-area'
import CTAArea from "@containers/global/cta-area/section-one";

const CaseStudiesPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Case Studies" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Case Studies"
		/>
		<main className="site-wrapper-reveal">
			<CaseStudyArea />
			<CTAArea />
		</main>
		<Footer />
	</Layout>
)

export default CaseStudiesPage
