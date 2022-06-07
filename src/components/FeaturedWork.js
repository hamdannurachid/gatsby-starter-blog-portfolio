// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

// import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Section from "./Section"

export default function Header() {
    return (
        <StaticQuery
            query={graphql`
      {
        allMarkdownRemark (filter: {frontmatter: {key: {eq: "portfolio"}}}, limit: 2, sort: {fields: frontmatter___date, order: ASC}){
            edges {
              node {
                fields{
                  slug
                }
                frontmatter {
                  date
                  title
                  linkproto
                  thumbnailImage {
                    id
                    childImageSharp {
                      gatsbyImageData(layout: CONSTRAINED width: 1440, placeholder: BLURRED)
                    }
                  }
                }
                excerpt
              }
            }
          }
       }
       `}
            render={data => (
                <div>



                    <Section>
                        <div className="flex justify-center gap-8" >

                            <div className="lg:w-8/12 sm:w-full">
                                <div className="mt-12 lg:mt-0 lg:col-span-2">


                                    <div className="flex items-center gap-x-2">
                                        <h2 className="text-gray-900">
                                            Featured Work

                                        </h2>

                                        <Link to={`/project`}>
                                            <StaticImage src="../images/arrow-down.png" alt="circle down" placeholder="none" width={45} />
                                        </Link>
                                    </div>



                                    <ul
                                        role="list"
                                        className="space-y-12 mt-8 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                                    >
                                        {data.allMarkdownRemark.edges.map(({ node }) => (
                                            <li>
                                                <div className="space-y-4 my-2">
                                                    <div className="aspect-w-3 aspect-h-2 ">

                                                        {/* {node.frontmatter.thumbnailImage &&
<Img fluid={node.frontmatter.thumbnailImage.childImageSharp.fluid} className="w-full h-full object-cover" />
} */}

                                                        {/* <img src={node.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData.images.fallback.src} className="w-full h-full" alt="" /> */}
                                                        {/* <GatsbyImage image={node.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData.images.fallback.src} alt={node.frontmatter.title} className="w-96 h-96 object-cover" /> */}

                                                        {/* <GatsbyImage image={node.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData} alt={node.frontmatter.title} /> */}

                                                    </div>

                                                    <div className="text-lg leading-6 font-medium space-y-1">
                                                        <h3> {node.frontmatter.title}</h3>
                                                    </div>

                                                    {/* <p className="text-gray-900 text-lg">{person.bio}</p> */}

                                                    <div className="my-4">
                                                        <Link to={`/project/` + node.fields.slug}>
                                                            View Study Case
                                                        </Link>

                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>



                                </div>
                            </div>
                        </div>
                    </Section>



                </div>
            )}
        />
    )
}