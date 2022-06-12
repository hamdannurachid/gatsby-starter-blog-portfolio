// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
// import Layout from "../components/layout"
import SEO from "../components/seo"
// import { graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
// import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Section from "../components/Section"
import Circle from '../components/Circle';
import Layout from "../components/layout"


export default function Gallery() {
    return (
        <Layout>
            <SEO title="Gallery" />

            <StaticQuery
                query={graphql`
      {
        allMarkdownRemark (filter: {frontmatter: {key: {eq: "gallery"}}}, sort: {fields: frontmatter___date, order: ASC}){
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
                    childImageSharp {
                      gatsbyImageData(layout: CONSTRAINED width: 1440 placeholder: BLURRED)
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
                                <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-2">
                                    <div className="space-y-12">
                                        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                                            <h2 className="text-gray-900 text-[53px] flex items-center gap-x-2">
                                                Gallery
                                                <Circle size="large" className="bg-blue-600" />
                                                Design
                                            </h2>
                                        </div>
                                        <ul
                                            role="list"
                                            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                                        >
                                            {data.allMarkdownRemark.edges.map(({ node }) => (
                                                <li>
                                                    <div className="space-y-2">
                                                        <div className="aspect-w-3 aspect-h-2">
                                                            <Link to={node.fields.slug} asModal className="underline hover:text-blue-600">

                                                                <GatsbyImage image={node.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData} alt={node.frontmatter.title} className="w-full h-full object-cover rounded-lg" />
                                                            </Link>
                                                        </div>
                                                        {/* <div className="space-y-1">
                                                            <div className="text-lg leading-6 font-medium">
                                                                <Link to={node.fields.slug} asModal className="underline hover:text-blue-600">
                                                                    <h3>{node.frontmatter.title}</h3>
                                                                </Link>
                                                            </div>
                                                        </div> */}
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

        </Layout >
    )
}