import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import TeamArea from '@containers/leadership/team-area'
import TeamListArea from '@containers/leadership/team-list-area'
import ContactArea from '@containers/global/contact-area/contact-one'

const LeadershipPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Leadership" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Leadership"
		/>
		<main className="site-wrapper-reveal">
			<TeamArea />
			<TeamListArea />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default LeadershipPage