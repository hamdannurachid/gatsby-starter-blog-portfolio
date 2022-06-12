// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import Navbar from "../components/Navbar"


const DetailProject = ({ data, pageContext }) => {

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
        <Layout>
            <SEO title="Portfolio" />
            <div>
                <div className="row">
                    <div className="mx-auto text-gray-900">

                        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 text-center justify-center ">
                            {/* <h2 className="text-3xl lg:text-5xl font-semibold">Creative Design Process</h2> */}

                            <div className="my-8">
                                <div className="flex items-center justify-between">
                                    <div className="flex-shrink-0 inline-flex rounded-full ">
                                        {/* <img src={hamdanAva} alt="hamdan" className="h-12 w-12 rounded-full" /> */}
                                        <StaticImage src="../images/hamdan-ava.png" alt="icon" placeholder="none" className="h-12 w-12 rounded-full" />


                                        <div className="ml-4 text-left">
                                            <div className="text-base font-medium">{post.frontmatter.title} </div>
                                            <div className="text-sm font-regular">Hamdan Nurachid</div>
                                        </div>
                                    </div>

                                    <Link to={post.frontmatter.linkproto} className="text-sm font-medium inline-flex items-center gap-x-1  text-blue-600 hover:text-blue-800" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg> Play prototype
                                    </Link>


                                </div>
                            </div>


                            <div className="bg-white p-4 text-left text-lg">
                                <GatsbyImage image={post.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData} alt={post.frontmatter.title} className="w-full h-full object-cover" />
                                {/* <GatsbyImage image={post.frontmatter.contentImage.childImageSharp.gatsbyImageData} alt={post.frontmatter.title} className="w-full h-full object-cover" /> */}
                                <section
                                    dangerouslySetInnerHTML={{ __html: post.html }}
                                />

                            </div>
                        </div>



                        <div className=" text-xl leading-normal p-12">



                        </div>

                        <div className="sm:grid grid-cols-4 gap-5 mx-auto">
                            <div className="col-start-1 col-end-3 my-2">

                                {prev && (
                                    <Link to={prev.url}>
                                        <div className="h-full p-6 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-2 border-yellow-500 shadow-md">
                                            <h3 className="mb-3 font-semibold inline-flex text-gray-800 dark:text-gray-100">
                                                <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z" fill="currentColor" /></svg>
                                                Sebelumnya
                                            </h3>
                                            <p className="text-gray-800 dark:text-gray-100">{prev.title}</p>
                                        </div>
                                    </Link>
                                )}

                            </div>
                            <div className="col-end-5 col-span-2 my-2">
                                {next && (
                                    <Link to={next.url}>
                                        <div className="h-full p-6 dark:bg-gray-800 bg-white hover:shadow-xl rounded border-b-2 border-yellow-500 shadow-md text-right">
                                            <h3 className="mb-3 font-semibold inline-flex text-gray-800 dark:text-gray-100">
                                                Berikutnya
                                                <svg className="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" /></svg>

                                            </h3>
                                            <p className="text-gray-800 dark:text-gray-100">{next.title}</p>
                                        </div>
                                    </Link>
                                )}
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default DetailProject

export const query = graphql`
query projectPostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
            date
            linkproto
            thumbnailImage {
                id
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED width: 1440 placeholder: BLURRED, formats: [AVIF])
                }
              }
              
              contentImage {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED width: 1440 placeholder: BLURRED, formats: [AVIF])
                }
              }
              
            
        }
    }  
}
`;