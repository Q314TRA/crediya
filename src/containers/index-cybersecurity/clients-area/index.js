import React from "react";
import { useStaticQuery, graphql, Link } from 'gatsby'
import parse from "html-react-parser";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import { ClientsWrap, ClientsSecInner, ClientContent, ClinetImages } from './clients-area.style'

const ClientsArea = ({ headingStyle }) => {
	const clientsData = useStaticQuery(graphql`
        query CybersecurityClientsQuery {
            indexCybersecurityJson(id: {eq: "cybersecurity-client-content"}) {
                title
                subtitle
                download_link
            }
            allClientsJson {
                edges {
                    node {
                        path
                        image {
                            childImageSharp {
								gatsbyImageData(
									layout: CONSTRAINED
									width: 230
									height: 230
									placeholder: TRACED_SVG
									formats: WEBP
									quality: 100
								)
                            }
                        }
                    }
                }
            }
        }
    `);
	const { title, subtitle, download_link } = clientsData.indexCybersecurityJson
	const clients = clientsData.allClientsJson.edges

	return (
		<ClientsWrap>
			<ClientsSecInner>
				<Container>
					<Row>
						<Col lg={12}>
							<ClientContent>
								{title && <Heading {...headingStyle}>{parse(title)}</Heading>}
								{subtitle && <Text>{subtitle}</Text>}
								{download_link && <Button className="download_btn" icon="far fa-long-arrow-right" hover="2" to={download_link}>Download free proposal sample </Button>}
							</ClientContent>
							<ClinetImages>
								{clients && clients.map((client, i) => (
									<div key={`client-${i}`} className={`redrow-img redrow-${i + 1} animate wow fadeInLeft`} data-wow-delay={`0.${i + 1}s`}>
										<Link to={client.node.path}>
											<GatsbyImage image={getImage(client.node.image)} alt="Client" />
										</Link>
									</div>
								))}
							</ClinetImages>
						</Col>
					</Row>
				</Container>
			</ClientsSecInner>
		</ClientsWrap>
	)
}

ClientsArea.defaultProps = {
	headingStyle: {
		as: 'h3',
		fontWeight: 500,
		child: {
			color: 'primary'
		}
	}
}

export default ClientsArea
