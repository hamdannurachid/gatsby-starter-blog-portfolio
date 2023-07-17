import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewestWork from "../components/NewestWork"
import PreviousWork from "../components/PreviousWork"

const Works = () => {
    return (
        <Layout>
            <SEO title="Project" />

            <section className="pb-24">
            <NewestWork />
            <PreviousWork />
            </section>

        </Layout >
    )
}

export default Works

