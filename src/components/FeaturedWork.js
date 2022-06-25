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
                            <div className="lg:w-8/12 sm:w-full">
                                <div className="mt-12 lg:mt-0 lg:col-span-2">
                                    <div className="flex items-center gap-x-2">
                                        <h1 className="text-gray-900 text-[53px]">
                                            Featured Work
                                        </h1>

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
                                                        <GatsbyImage image={node.frontmatter.thumbnailImage.childImageSharp.gatsbyImageData} alt={node.frontmatter.title} className="w-full h-full object-cover" />

                                                        {/* <GatsbyImage image={node.frontmatter.thumbnailImage} alt={node.frontmatter.title} /> */}

                                                    </div>

                                                    <div className="text-lg leading-6 font-bold space-y-1">
                                                        <h3 className="text-[32px]"> {node.frontmatter.title}</h3>
                                                    </div>

                                                    {/* <p className="text-gray-900 text-lg">{person.bio}</p> */}

                                                    <div className="my-4">
                                                        <Link to={`/project/` + node.fields.slug} className="underline hover:text-blue-600">
                                                            View Study Case
                                                        </Link>

                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center justify-center py-12">
                                        <Link to={`/project`}>
                                            <h4 className="text-lg sm:text-[32px] flex items-center gap-x-2 hover:text-blue-600 hover:font-medium">
                                                <span className="block">Show </span>
                                                <Circle size="small" className="bg-blue-600" />
                                                <span className="block">More</span>

                                                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_829_549)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8529 2.85662C28.1563 2.85662 33.2424 4.96336 36.9924 8.7134C40.7425 12.4634 42.8492 17.5496 42.8492 22.8529C42.8492 28.1563 40.7425 33.2424 36.9924 36.9924C33.2424 40.7425 28.1563 42.8492 22.8529 42.8492C17.5496 42.8492 12.4634 40.7425 8.71339 36.9924C4.96336 33.2424 2.85661 28.1563 2.85661 22.8529C2.85661 17.5496 4.96336 12.4634 8.7134 8.7134C12.4634 4.96336 17.5496 2.85662 22.8529 2.85662ZM22.8529 45.7058C28.9139 45.7058 34.7266 43.2981 39.0124 39.0124C43.2981 34.7266 45.7058 28.9139 45.7058 22.8529C45.7058 16.7919 43.2981 10.9792 39.0124 6.69347C34.7266 2.40771 28.9139 1.26387e-06 22.8529 9.98933e-07C16.7919 7.33999e-07 10.9792 2.40771 6.69346 6.69346C2.40771 10.9792 -7.33999e-07 16.7919 -9.98933e-07 22.8529C-1.26387e-06 28.9139 2.40771 34.7266 6.69346 39.0124C10.9792 43.2981 16.7919 45.7058 22.8529 45.7058ZM12.8548 24.2812C12.476 24.2812 12.1127 24.1307 11.8448 23.8629C11.5769 23.595 11.4265 23.2317 11.4265 22.8529C11.4265 22.4741 11.5769 22.1108 11.8448 21.843C12.1127 21.5751 12.476 21.4246 12.8548 21.4246L29.4031 21.4246L23.27 15.2943C23.0018 15.0261 22.8511 14.6624 22.8511 14.2831C22.8511 13.9038 23.0018 13.54 23.27 13.2718C23.5382 13.0036 23.9019 12.853 24.2812 12.853C24.6605 12.853 25.0243 13.0036 25.2925 13.2718L33.8623 21.8417C33.9953 21.9744 34.1008 22.132 34.1729 22.3055C34.2449 22.479 34.2819 22.665 34.2819 22.8529C34.2819 23.0408 34.2449 23.2268 34.1729 23.4003C34.1008 23.5739 33.9953 23.7315 33.8623 23.8642L25.2925 32.434C25.0243 32.7022 24.6605 32.8529 24.2812 32.8529C23.9019 32.8529 23.5382 32.7022 23.27 32.434C23.0018 32.1658 22.8511 31.802 22.8511 31.4228C22.8511 31.0435 23.0018 30.6797 23.27 30.4115L29.4031 24.2812L12.8548 24.2812Z" fill="#2563EB" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_829_549">
                                                            <rect width="45.7058" height="45.7058" fill="white" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                                {/* <StaticImage src="../images/arrow-down.png" alt="circle down" placeholder="none" width={45} /> */}
                                            </h4>
                                        </Link>
                                    </div>

                                </div>


                            </div>


                        </div>
                    </Section>



                </div>
            )}
        />
    )
}