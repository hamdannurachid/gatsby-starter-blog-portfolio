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

      </main>
    </Layout >
  )
}

export default IndexPage

