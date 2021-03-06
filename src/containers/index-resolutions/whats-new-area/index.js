import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import BoxIcon from "@components/box-icon/layout-three";
import { SectionWrap } from './whats-new-area.style'

const WhatsNewArea = () => {
	const whatsnewData = useStaticQuery(graphql`
        query ResoulationsWhatsnewQuery {
            indexResolutionsJson(id: {eq: "resolutions-new-content"}) {
                list {
                    title
                    desc
                    icon {
                        childImageSharp {
							gatsbyImageData(
								layout: FIXED
								width: 60
								height: 60
								placeholder: TRACED_SVG
								formats: WEBP
								quality: 100
							)
                        }
                    }
                }
            }
        }      
    `);
	const whatsnewlist = whatsnewData.indexResolutionsJson.list;

	return (
		<SectionWrap>
			<Container>
				<Row>
					{whatsnewlist.map((data, i) => (
						<Col lg={6} key={`whats-new-${i}`}>
							<BoxIcon
								icon={data.icon}
								title={data.title}
								desc={data.desc}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</SectionWrap>
	)
}

export default WhatsNewArea
