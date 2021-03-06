import React, { useState } from "react"
import { Link } from "gatsby"
import Button from '../components/Button';
import { StaticImage } from "gatsby-plugin-image"



const menulink = [
    {
        name: 'Home',
        link: '/',

    },
    {
        name: 'About',
        link: '/about',

    },
    {
        name: 'Project',
        link: '/project',

    },
    {
        name: 'Gallery',
        link: '/gallery',

    },

]


function Navbar() {

    const [isExpanded, toggleExpansion] = useState(false)


    return (
        <nav className="top-0 z-30 flex items-center justify-between flex-wrap py-6 px-8 sm:px-24 mybg transition-all duration-300">
            <div className="flex justify-start lg:w-0 lg:flex-1 mr-6">
                <Link
                    to={`/`}
                    href="#responsive-header"
                    className="block mr-4 text-xl lg:inline-block lg:mt-0 text-gray-900"
                >
                    {/* {siteTitle} */}
                    <StaticImage src="../images/nav-ico.png" alt="icon" placeholder="none" width={238} />


                </Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-gray-50 hover:border-white dark:bg-gray-900 bg-gray-800">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className={`${isExpanded ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-md lg:flex-grow lg:ml-10 font-medium">

                    {menulink.map((item) => (
                        <Link
                            to={item.link}
                            className="block mt-4 lg:px-4 text-gray-900 lg:inline-block lg:mt-0"
                        >
                            {item.name}
                        </Link>
                    ))}


                </div>

                <div className="inline-block text-sm -ml-5 py-2">

                    <a href='mailto:hamdannurachid6@gmail.com'>
                        <Button size="default" to={`/belajar`}>Let's Talk</Button>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar