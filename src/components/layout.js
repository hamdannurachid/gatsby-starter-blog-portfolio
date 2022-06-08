import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <body>

        <main>
          <Navbar />
          {children}

        </main>
        <Footer />
      </body>
    </>
  )
}

export default Layout