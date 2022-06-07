import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Circle from '../components/Circle';

const Hero = () => {
    return (
        <div>

            <div className="relative bg-red-200 overflow-hidden">
                <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
                    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8 ">
                            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                                <h1>
                                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                        <span className="block text-gray-900">Hi, I’m Hamdan Nurachid</span>
                                        <span className="block text-indigo-600">A Creative  UI UX Designer</span>
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">

                                    <h3 className="mt-8 text-gray-900 leading-relaxed flex items-center gap-x-3">
                                        Research <Circle size="small" /> UI UX Design <Circle size="small" />Prototyping
                                    </h3>



                                </p>

                            </div>
                            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">

                                <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">


                                    <StaticImage src="../images/hamdan-ava.png" alt="icon" placeholder="none" className='w-full' />


                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default Hero