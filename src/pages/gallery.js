// Gatsby supports TypeScript natively!
import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby-plugin-modal-routing'
// import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Section from "../components/Section"
import Circle from '../components/Circle';


export default function Gallery() {
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
                    childImageSharp {
                      gatsbyImageData(layout: CONSTRAINED width: 1440 placeholder: BLURRED)
                    }
                  }
                  contentImage {
                    id
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
                            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
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
                                        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8"
                                    >
                                        {data.allMarkdownRemark.edges.map(({ node }) => (
                                            <li>
                                                <div className="space-y-4">
                                                    <div className="aspect-w-3 aspect-h-2">
                                                        <GatsbyImage image={node.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData} alt={node.frontmatter.title} className="w-full h-full object-cover" />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <div className="text-lg leading-6 font-medium space-y-1">

                                                            <Link to={node.fields.slug} state={{
                                                                modal: true
                                                            }} className="underline hover:text-blue-600">
                                                                <h3>{node.frontmatter.title}</h3>
                                                            </Link>
                                                            <p className="text-indigo-600">Front-end Developer</p>
                                                        </div>
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