// Gatsby supports TypeScript natively!
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const DetailWorks = ({ data, pageContext }) => {

  const post = data.markdownRemark;
  const htmlContent = { __html: post.html };
 
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div>
        <div className="mx-auto pt-14 pb-20 border-t-2">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-5xl lg:px-8 text-center justify-center ">
            <h2 className="text-3xl lg:text-5xl font-semibold">{post.frontmatter.title}</h2>

            <div className="flex flex-wrap items-center justify-center overflow-hidden text-sm leading-6 my-8">
              <div className="flex items-center justify-center gap-x-4">
                <div className="flex items-center text-center">
                  <StaticImage src="../images/hamdan-ava.png" alt="icon" placeholder="none" className="mr-2 h-12 w-12 flex-none rounded-full" />
                  <p className="text-lg font-bold">Hamdan Nurachid </p>
                </div>
                <svg viewBox="0 0 2 2" className="hidden h-2 w-2 flex-none fill-gray-400/50 sm:block">
                  <circle cx="1" cy="1" r="1" />
                </svg>
              </div>
              <time datetime="{post.frontmatter.date}" className="ml-3 font-semibold text-base text-gray-600/50">{post.frontmatter.datePublished}</time>
            </div>

            <div className="text-justify text-lg">
              <GatsbyImage image={getImage(post.frontmatter.featuredImage)} alt={post.frontmatter.title} className="w-full h-full object-cover rounded-lg" />
              <div dangerouslySetInnerHTML={htmlContent} className="pt-12"
                // style={{ whiteSpace: 'pre-line' }}
              />
            </div>
          </div>

        </div>
      </div>

    </Layout >
  );
};

export default DetailWorks

export const query = graphql`
query worksPostBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
            date
            datePublished
            featuredImage {
                id
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED width: 1440 placeholder: BLURRED)
                }
              }
        }
    }  
}
`;