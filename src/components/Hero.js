import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Circle from '../components/Circle';
import { Link } from "gatsby"


const sosmed = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/hamdannurachid/',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.30512 8.85279H12.9572V10.6719C13.4833 9.62569 14.8324 8.68563 16.859 8.68563C20.7441 8.68563 21.6665 10.7683 21.6665 14.5895V21.6665H17.7332V15.4598C17.7332 13.2837 17.2071 12.0565 15.8678 12.0565C14.0103 12.0565 13.2384 13.379 13.2384 15.4588V21.6665H9.30512V8.85279V8.85279ZM2.5605 21.4993H6.4938V8.68563H2.5605V21.4993V21.4993ZM7.05724 4.50748C7.05739 4.83716 6.992 5.16359 6.86489 5.46778C6.73778 5.77198 6.55147 6.04787 6.3168 6.27943C5.84126 6.75204 5.19759 7.01658 4.52715 7.01496C3.85788 7.01451 3.2157 6.75064 2.73946 6.28042C2.50564 6.04807 2.31996 5.77186 2.19307 5.46763C2.06618 5.1634 2.00057 4.83711 2 4.50748C2 3.84177 2.2655 3.20457 2.74044 2.73454C3.21626 2.26369 3.85872 1.99971 4.52813 2C5.19876 2 5.84185 2.26451 6.3168 2.73454C6.79076 3.20457 7.05724 3.84177 7.05724 4.50748Z" />
            </svg>
        ),
    },

    {
        name: 'Instagram',
        link: 'https://www.instagram.com/hamdan.ac.id/',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
        ),
    },

    {
        name: 'Dribbble',
        link: 'https://dribbble.com/hamdannur',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
            </svg>
        ),
    },

]

const Hero = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="pb-16 xl:flex xl:items-center xl:justify-between gap-x-2">
                    <div>
                        <h1 className="mt-4 text-[30px] sm:mt-5 sm:text-[53px] lg:mt-6 leading-normal">
                            <span className="block">Hi, I am Hamdan Nurachid </span>

                            {/* <span className="flex items-center gap-x-2">
                                A Creative  <Circle size="big" /> UI UX Designer
                            </span> */}

                            <span className="flex items-center flex-wrap gap-x-2">
                                <span className="block"> a </span>

                                {/* <span className="inline-flex items-center px-8 py-0.5 rounded-full font-medium border-2 border-gray-900 text-gray-900 text-[24px] sm:text-[48px] hover:bg-blue-600 hover:text-white hover:border-blue-600"> UI UX </span> */}
                                <Link to={`/project`} className="cursor-pointer">
                                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 hover:bg-blue-600 relative inline-block px-2 before:border-2 before:border-gray-900 hover:-skew-y-3 text-gray-900 hover:text-white">
                                        <span className="relative"> UI UX</span>
                                    </span>
                                </Link>
                                <span className="block">Designer</span>
                            </span>



                        </h1>



                        {/* <h1 className="mt-4 text-[30px] sm:mt-5 sm:text-[53px] lg:mt-6 leading-normal">
                            <span className="block">Hi, Im Hamdan Nurachid </span>
                            <span className="flex items-center flex-wrap gap-x-2">
                                <span className="block"> A Creative </span>
                                <Circle size="big" />
                                <span className="block">UI UX Designer</span>
                            </span>
                        </h1> */}

                        <h4 className="mt-4 text-lg sm:mt-5 sm:text-[32px] lg:mt-6 flex items-center gap-x-2 font-bold">
                            <span className="block">Research </span>
                            <Circle size="small" />
                            <span className="block">UI UX Design</span>
                            <Circle size="small" />
                            <span className="block">Prototyping</span>
                        </h4>
                        <div className="mt-6 sm:mt-12 border-gray-900 md:flex md:items-center md:justify-between">
                            <div className="flex space-x-6 md:order-2">
                                {sosmed.map((item) => (
                                    <div key={item.name}>
                                        <a href={item.link} target="_blank" className="text-gray-900 hover:text-black">
                                            <span className="sr-only">{item.name}</span>
                                            <item.icon className="h-10 w-10" aria-hidden="true" />
                                        </a>
                                    </div>
                                ))}


                            </div>

                        </div>
                    </div>
                    <div className="xl:w-2/5 mt-12 sm:mt-0">
                        <StaticImage src="../images/hamdan-ava.png" alt="icon" placeholder="none" className='w-full p-8' />
                    </div>

                </div>
            </div >

        </div >
    )
}

export default Hero