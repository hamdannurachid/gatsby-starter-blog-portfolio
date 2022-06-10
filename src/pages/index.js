import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import FeaturedWork from "../components/FeaturedWork"
import { Link } from "gatsby-plugin-modal-routing"


const IndexPage = () => {


  return (
    <Layout>
      <SEO title="Hamdan Nurachid" />

      <main>


        <Hero />
        <FeaturedWork />
        <p>
          <Link to="/page-2/" asModal>Page 2 in Modal</Link>
        </p>

      </main>
    </Layout >
  )
}

export default IndexPage

