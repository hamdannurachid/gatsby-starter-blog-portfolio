import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedWork from "../components/FeaturedWork"

const IndexPage = () => {


    return (
        <Layout>
            <SEO title="Project" />

            <FeaturedWork />

        </Layout >
    )
}

export default IndexPage

