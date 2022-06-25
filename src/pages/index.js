import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import FeaturedWork from "../components/FeaturedWork"
import Approach from "../components/Approach"

const IndexPage = () => {


  return (
    <Layout>
      <SEO title="Home" />

      <main>


        <Hero />
        <FeaturedWork />
        <Approach />

      </main>
    </Layout >
  )
}

export default IndexPage

