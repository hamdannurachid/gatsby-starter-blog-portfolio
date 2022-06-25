// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { navigate } from "@gatsbyjs/reach-router";
import Share from '../components/Share';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'


const DetailGallery = ({ data, pageContext }) => {

    const post = data.markdownRemark;
    const urlD = `https://dev-hamdannur.netlify.app/gallery/` + post.fields.slug;
    const title = post.frontmatter.title;


    // const title = post.frontmatter.title;

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
                    <nav
                        className="top-0 z-30 flex items-center justify-between flex-wrap py-6 px-8 sm:px-24 mybg transition-all duration-300 border-2 sticky w-full bg-white">

                        <div class="inline-flex items-center divide-x-0 sm:divide-x divide-gray-300">
                            <div class="flex-shrink-0 flex pr-5">
                                <Link to={`/`} href="#responsive-header"
                                    className="block mr-4 text-xl lg:inline-block lg:mt-0 text-gray-900">
                                    <StaticImage src="../images/nav-ico.png" alt="icon" placeholder="none" width={140} />
                                </Link>

                            </div>


                            {modal ? (
                                <Link to={closeTo} className="block sm:hidden">
                                    <div className="p-4 bg-gray-100 rounded-xl hover:bg-blue-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </Link>
                            ) : (
                                <></>
                            )}



                            <div class="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                                <h3 className="text-xl font-bold text-gray-900 hidden sm:block">{post.frontmatter.title}</h3>
                            </div>

                        </div>




                        <div className="w-full flex items-center lg:flex lg:items-center lg:w-auto">
                            <div className="inline-block text-sm -ml-5 py-2">

                                {modal ? (
                                    <Link to={closeTo} className="hidden sm:block">
                                        <div className="p-4 bg-gray-100 rounded-xl hover:bg-blue-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </Link>
                                ) : (
                                    <Link to={"/gallery"} className="text-blue-600">
                                        View All
                                    </Link>
                                )}

                            </div>
                        </div>
                    </nav>


                    <div className="row ">
                        <div className="mx-auto text-gray-900 ">

                            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 justify-center pb-12">
                                {/* <h2 className="text-3xl lg:text-5xl font-semibold">Creative Design Process</h2> */}


                                <div className="mt-8 block sm:hidden">
                                    <h3 className="text-3xl font-bold text-gray-900 text-left">{post.frontmatter.title}</h3>
                                </div>



                                <div className="flex space-x-2 py-8">
                                    <p className="font-bold">Share:</p>
                                    <Share socialConfig={{
                                        // twitterHandle,
                                        config: {
                                            // url: `${`post.fields.slug`}`,
                                            url: `${urlD}`,
                                            // url: `${`https://swas.io/blog/social-share-button-for-gatsby-blog-pages/`}`,

                                            title,

                                        },
                                    }} />



                                </div>

                                <div className=" py-4 text-left text-xl">
                                    {/*
                        <GatsbyImage image={post.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData}
                            alt={post.frontmatter.title} className="w-full h-full object-cover rounded" /> */}

                                    <section dangerouslySetInnerHTML={{ __html: post.html }} />




                                </div>


                            </div>





                        </div>
                    </div>
                </div>
            )}
        </ModalRoutingContext.Consumer>

    );
};

export default DetailGallery

export const query = graphql`
query galleryPostBySlug($slug: String!) {

site {
siteMetadata {
url
twitterHandle
}
}


markdownRemark(fields: {slug: {eq: $slug}}) {
html
fields{
slug
}
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




}
}
}
`;