import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Circle from '../components/Circle';

const Hero = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="pb-16 xl:flex xl:items-center xl:justify-between gap-x-2">
                    <div>
                        <h1 className="mt-4 text-[32px] sm:mt-5 sm:text-[53px] lg:mt-6">
                            <span className="block">Hi, Im Hamdan Nurachid </span>
                            <span className="flex items-center gap-x-2">
                                A Creative  <Circle size="big" /> UI UX Designer
                            </span>
                        </h1>

                        <h4 className="mt-4 text-lg sm:mt-5 sm:text-[32px] lg:mt-6 flex items-center gap-x-2">
                            <span className="block">Research </span>
                            <Circle size="small" />
                            <span className="block">UI UX Design</span>
                            <Circle size="small" />
                            <span className="block">Prototyping</span>
                        </h4>
                        <p className="mt-5 text-xl text-gray-500">Includes every feature we offer plus unlimited projects and unlimited users.</p>
                    </div>
                    <div className="xl:w-2/5">
                        <StaticImage src="../images/hamdan-ava.png" alt="icon" placeholder="none" className='w-full py-4 sm:py-0' />


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero