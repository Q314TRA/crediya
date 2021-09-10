import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "@ui/wrapper";
import AwardBox from "@components/box-image/layout-eight";
import { AwardsSection } from './awards.style'

const Awards = ({ boxStyles }) => {
	const awardsQueryData = useStaticQuery(graphql`
        query AwardsDataQuery {
            allAwardsJson {
                edges {
                  node {
                    id
                    title
                    desc
                    image {
						childImageSharp {
							gatsbyImageData(
								layout: FIXED
								placeholder: TRACED_SVG
								quality: 100
								width: 161
								height: 109
							)
						}
                    }
                  }
                }
            }
        }
    `);

	const awardsData = awardsQueryData.allAwardsJson.edges;

	return (
		<AwardsSection>
			<Row>
				{awardsData.map(award => (
					<Col key={award.node.id} lg={6}>
						<AwardBox
							{...boxStyles}
							imageSrc={award.node.image}
							title={award.node.title}
							desc={award.node.desc}
						/>
					</Col>
				))}
			</Row>
		</AwardsSection>
	)
}

Awards.propTypes = {
	boxStyles: PropTypes.object
}

Awards.defaultProps = {
	boxStyles: {
		boxStyle: {
			mt: '50px'
		}
	}
}

export default Awards;