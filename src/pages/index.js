import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import FeaturedWork from "../components/FeaturedWork"
import Footer from "../components/Footer"


const IndexPage = () => {


  return (
    <Layout>
      <SEO title="Hamdan Nurachid" />

      <main>

        <Navbar />
        <Hero />
        <FeaturedWork />
        <Footer />

      </main>
    </Layout >
  )
}

export default IndexPage

