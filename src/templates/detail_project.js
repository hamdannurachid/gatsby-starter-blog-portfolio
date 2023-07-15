// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"


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

    // const src = getSrc(post.frontmatter.contentImage)


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


                                        <div className="ml-4 text-left text-gray-900">
                                            <p className="text-3xl font-bold">{post.frontmatter.title} </p>
                                            <p className="text-sm font-regular">Hamdan Nurachid</p>
                                        </div>
                                    </div>

                                    {/* <Link to={post.frontmatter.linkproto} className="text-sm font-medium inline-flex items-center gap-x-1  text-blue-600 hover:text-blue-800" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                        </svg> Play prototype
                                    </Link> */}


                                </div>
                            </div>


                            <div className="bg-white sm:p-4 p-0 text-left text-lg">
                                <GatsbyImage image={post.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData} alt={post.frontmatter.title} className="w-full h-full object-cover" />
                                {/* <GatsbyImage image={post.frontmatter.contentImage.childImageSharp.gatsbyImageData} alt={post.frontmatter.title} className="w-full h-full object-cover" /> */}
                                {/* <section
                                    dangerouslySetInnerHTML={{ __html: post.html }}
                                /> */}
                                {/* <img src={post.frontmatter.contentImage.childImageSharp.gatsbyImageData.images.fallback.src} alt="" className="w-full h-full object-cover" /> */}


                                {/* <img srcset={getSrcSet(post.frontmatter.contentImage)} /> */}

                                {/* <GatsbyImage image={post.frontmatter.contentImage.childImageSharp.gatsbyImageData} alt={post.frontmatter.title} className="w-full h-full object-cover" /> */}
                                <section
                                    dangerouslySetInnerHTML={htmlContent}
                                />

                            </div>
                        </div>



                        <div className=" text-xl leading-normal p-12">



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
                  gatsbyImageData(layout: CONSTRAINED width: 1440 placeholder: BLURRED)
                }
              }
              
              contentImage {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED width: 1440 placeholder: BLURRED, formats: [PNG])
                }
              }
              
            
        }
    }  
}
`;