import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header/header-one";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import MessageBoxSection from '@containers/elements/message-box'
import Cta from "@containers/global/cta-area/section-one";

const MessageBoxPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="List Item" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="List Item"
			/>
			<main className="site-wrapper-reveal">
				<MessageBoxSection />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default MessageBoxPage
