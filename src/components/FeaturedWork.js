// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

// import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Section from "./Section"
import Circle from '../components/Circle';


const arrow = {

    right: [
        {
            name: 'Arrow Right',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.30512 8.85279H12.9572V10.6719C13.4833 9.62569 14.8324 8.68563 16.859 8.68563C20.7441 8.68563 21.6665 10.7683 21.6665 14.5895V21.6665H17.7332V15.4598C17.7332 13.2837 17.2071 12.0565 15.8678 12.0565C14.0103 12.0565 13.2384 13.379 13.2384 15.4588V21.6665H9.30512V8.85279V8.85279ZM2.5605 21.4993H6.4938V8.68563H2.5605V21.4993V21.4993ZM7.05724 4.50748C7.05739 4.83716 6.992 5.16359 6.86489 5.46778C6.73778 5.77198 6.55147 6.04787 6.3168 6.27943C5.84126 6.75204 5.19759 7.01658 4.52715 7.01496C3.85788 7.01451 3.2157 6.75064 2.73946 6.28042C2.50564 6.04807 2.31996 5.77186 2.19307 5.46763C2.06618 5.1634 2.00057 4.83711 2 4.50748C2 3.84177 2.2655 3.20457 2.74044 2.73454C3.21626 2.26369 3.85872 1.99971 4.52813 2C5.19876 2 5.84185 2.26451 6.3168 2.73454C6.79076 3.20457 7.05724 3.84177 7.05724 4.50748Z" />
                </svg>
            )
        }
    ]

}


export default function Header() {
    return (
        <StaticQuery
            query={graphql`
      {
        allMarkdownRemark (filter: {frontmatter: {key: {eq: "portfolio"}}}, limit: 10, sort: {fields: frontmatter___date, order: ASC}){
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
                      gatsbyImageData(layout: CONSTRAINED width: 1440 placeholder: BLURRED, formats: [PNG])
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
                                <div className="w-full mt-12 lg:mt-0 lg:col-span-2">
                                    <div className="flex items-center gap-x-2">
                                        <h4 className="text-gray-900 text-xl font-bold tracking-wide">
                                            FEATURED WORK
                                        </h4>
                                        <StaticImage src="../images/arrow-down.png" alt="circle down" placeholder="none" width={24} />
                                    </div>
                                    <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                                        {data.allMarkdownRemark.edges.map(({ node }) => (
                                            <Link to={`/project/` + node.fields.slug}>
                                                <article className="flex flex-col items-start justify-between hover:shadow-lg border-2 border-gray-200 overflow-hidden rounded-lg">
                                                    <div className="relative w-full overflow-hidden">
                                                        <GatsbyImage image={node.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData} alt={node.frontmatter.title} className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105" />
                                                       
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