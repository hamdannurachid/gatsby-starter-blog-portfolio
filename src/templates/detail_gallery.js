// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import Navbar from "../components/Navbar"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'


const DetailGallery = ({ data, pageContext }) => {

    const post = data.markdownRemark;
    const prev = pageContext.prev
        ? {
            url: `/project/${pageContext.prev.fields.slug}`,
            title: pageContext.prev.frontmatter.title
        }
        : null

    const next = pageContext.next
        ? {
            url: `/project/${pageContext.next.fields.slug}`,
            title: pageContext.next.frontmatter.title
        }
        : null

    const htmlContent = { __html: post.html };
    return (
        <ModalRoutingContext.Consumer>

            {({ modal, closeTo }) => (
                <div>
                    {modal ? (
                        <Link to={closeTo} className="focus:outline-none">
                            <div className="flex justify-end items-center text-xl text-gray-800 border-transparent">
                                <button type="button border-transparent">✖</button>
                            </div>
                        </Link>

                    ) : (

                        <header>
                            <h1>
                                Website Title
                            </h1>
                        </header>
                    )}
                    <SEO title="Portfolio" />

                    <div className="row">
                        <div className="mx-auto text-gray-900">

                            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 text-center justify-center ">
                                {/* <h2 className="text-3xl lg:text-5xl font-semibold">Creative Design Process</h2> */}

                                <div className="bg-white p-4 text-left text-lg">
                                    <GatsbyImage image={post.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData} alt={post.frontmatter.title} className="w-full h-full object-cover" />
                                    {/* <GatsbyImage image={post.frontmatter.contentImage.childImageSharp.gatsbyImageData} alt={post.frontmatter.title} className="w-full h-full object-cover" /> */}
                                    <h1>gallery konten</h1>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            )
            }
        </ModalRoutingContext.Consumer>
    );
};

export default DetailGallery

export const query = graphql`
            query galleryPostBySlug($slug: String!) {
                markdownRemark(fields: {slug: {eq: $slug}}) {
                html
        frontmatter {
                title
            date
            linkproto
            thumbnailImage {
                id
                childImageSharp {
                gatsbyImageData(layout: CONSTRAINED width: 1440 placeholder: BLURRED)
                }
              }
            contentImage {
                id
                childImageSharp {
                gatsbyImageData(layout: CONSTRAINED width: 1440 placeholder: BLURRED, formats: [AVIF])
                }
              }

              
            
        }
    }  
}
            `;
