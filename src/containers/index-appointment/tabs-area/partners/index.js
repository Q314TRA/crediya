import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ClientLogo from "@ui/client-logo";
import { PartnersWrap, BrandLogoWrap } from "./partners.style";

const Partners = () => {
	const partnersQueryData = useStaticQuery(graphql`
        query PartnersDataQuery{
            allPartnersJson {
                edges {
                  node {
                    id
                    path
                    image {
                      childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                      }
                    }
                    hover_image {
                      childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
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
	const partnersData = partnersQueryData.allPartnersJson.edges;
	return (
		<PartnersWrap>
			{partnersData.map(data => (
				<BrandLogoWrap key={data.node.id}>
					<ClientLogo
						layout={1}
						title={data.node.id}
						path={data.node.path}
						brandImage={data.node.image}
						hoverImage={data.node.hover_image}
					/>
				</BrandLogoWrap>
			))}
		</PartnersWrap>
	)
}
export default Partners;