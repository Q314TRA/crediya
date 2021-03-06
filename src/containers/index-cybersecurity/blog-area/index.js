import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Blog from "@components/blog/layout-one";
import RecentPostList from '../../blog/recent-post-list'
import { BlogWrapper, LeftBox, RecentBlogWrap, FeaturedBlogWrap } from './blog-area.style'

const BlogArea = props => {
	const blogData = useStaticQuery(graphql`
        query CybersecurityBlogQueryData{
            sectionData: indexCybersecurityJson(id: {eq: "cybersecurity-blog-content"}) {
                title
                subtitle
            }
            featuredBlog: allMarkdownRemark(filter: {frontmatter: {is_featured: {eq: true}}}, limit: 4) {
                edges {
                  node {
                    fields{
                        slug
                        dateSlug
                    }
                    frontmatter {
						title
						date(formatString: "LL")
						format
						quote_text
						quote_author
						video_link
						featured_image {
							childImageSharp {
								gatsbyImageData(
									layout: CONSTRAINED
									width: 550
									height: 340
									placeholder: TRACED_SVG
									formats: WEBP
									quality: 100
								)
							}
						}
                    }
                    excerpt(format: PLAIN)
                  }
                }
            }
        }
    `)
	const blogSecData = blogData.sectionData;
	const featuredBlogs = blogData.featuredBlog.edges;

	return (
		<BlogWrapper>
			<Container>
				<Row>
					<Col lg={4}>
						<LeftBox>
							<SectionTitle
								align="left"
								title={blogSecData.title}
								subtitle={blogSecData.subtitle}
							/>
							<RecentBlogWrap>
								<RecentPostList />
							</RecentBlogWrap>
						</LeftBox>
					</Col>
					<Col lg={8}>
						<Row>
							{featuredBlogs && featuredBlogs.map(featuredBlog => (
								<Col md={6} key={featuredBlog.node.fields.slug}>
									<FeaturedBlogWrap>
										<Blog content={featuredBlog.node} />
									</FeaturedBlogWrap>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</BlogWrapper>
	)
}

export default BlogArea;