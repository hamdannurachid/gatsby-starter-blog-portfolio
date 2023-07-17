import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import FeaturedWork from "../components/FeaturedWork"
import Approach from "../components/Approach"
import NewestWorkIndex from "../components/NewestWorkIndex"
import Button from '../components/Button';
import { Link } from "gatsby"

const IndexPage = () => {


  return (
    <Layout>
      <SEO title="Home" />
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <main>


        <Hero />
        <NewestWorkIndex />
        {/* <Approach /> */}


        <div className="mx-auto max-w-7xl pb-24">
          <div className="mx-auto flex justify-center sm:text-center py-4">
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button> */}
            <Link to={`/works`}>
                    <Button size="default" to={`/works`}>See All</Button>
            </Link>
          </div>
        </div>



      </main>
    </Layout >
  )
}

export default IndexPage

