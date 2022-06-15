import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About"
import Section from "../components/Section"

const AboutPage = () => {

    return (

        <Layout>
            <SEO title="Home" />
            <main>
                <Section>
                    <About />
                </Section>
            </main>
        </Layout >

    )
}

export default AboutPage

