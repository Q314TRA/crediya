import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import JobsArea from '@containers/careers/jobs-area'
import GalleryArea from '@containers/careers/gallery-area'
import ContactArea from '@containers/global/contact-area/contact-one'

const CareersPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Careers" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Careers"
		/>
		<main className="site-wrapper-reveal">
			<JobsArea />
			<GalleryArea />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default CareersPage