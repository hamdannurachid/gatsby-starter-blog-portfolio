// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

// import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Section from "../components/Section"

export default function NewestWork() {
    return (
        <StaticQuery
            query={graphql`
      {
        allMarkdownRemark (
            filter: {frontmatter: {key: {eq: "works"}, category: {eq: "featured"}}}, 
        sort: {fields: frontmatter___date, order: DESC})
        {
            edges {
              node {
                fields{
                  slug
                }
                frontmatter {
                    date
                    title
                    featuredImage {
                      childImageSharp {
                          gatsbyImageData(layout: CONSTRAINED width: 1440 placeholder: BLURRED)
                      }
                  }
                }
                  html
                }
              }
            }
       }
       `}
            render={data => (
                <div>
                <Section>
                    <div className="flex justify-center gap-8" >
                        <div className="w-full mt-12 lg:mt-0 lg:col-span-2">
                            <div className="flex items-center gap-x-2">
                                <h4 className="text-gray-900 text-xl font-bold tracking-wide">
                                    NEWEST WORK 
                                </h4>
                                <StaticImage src="../images/arrow-down.png" alt="circle down" placeholder="none" width={24} />
                            </div>
                            <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                {data.allMarkdownRemark.edges.map(({ node }) => (
                                    <Link to={`/works/` + node.fields.slug}>
                                        <article className="flex flex-col items-start justify-between hover:shadow-lg border-2 border-gray-200 overflow-hidden rounded-lg">
                                            <div className="relative w-full overflow-hidden">
                                                <GatsbyImage image={getImage(node.frontmatter.featuredImage)} alt={node.frontmatter.title} className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105" />

                                                {/* <GatsbyImage image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData} alt={node.frontmatter.title} className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105" /> */}
                                            </div>
                                            <div className="w-full p-4">
                                                <h3 className="mt-3 text-2xl font-semibold leading-tight text-gray-900 group-hover:text-gray-600">
                                                    {node.frontmatter.title}
                                                </h3>
                                            </div>
                                        </article>
                                    </Link>

                                ))}
                            </div>
                        </div>

                    </div>
                </Section>
            </div>
            )}
        />
    )
}