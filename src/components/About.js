import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import Section from "./Section"


import { Link } from "gatsby"

import Button from './Button';
import Circle from './Circle';

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'


const aboutMe = {
    experiences: [
        {
            role: "UI UX Designer",
            company: "PT. SAWALA INOVASI INDONESIA",
            month: "JAN 2021 - PRESENT",
            // description: (props) => (
            //   <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            //     <path
            //       fillRule="evenodd"
            //       d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            //       clipRule="evenodd"
            //     />
            //   </svg>
            // ),
            description: "<ul className=\"list-disc\"><li>Communication and collaboration with product managers, development teams and clients </li> <li>Understand problems related to the application that will be made based on the received stakeholder brief </li> <li>Mapping problem solving from research results that have been carried out in the form of wireframes </li> <li>Designing sitemaps, wireframes, high fidelity designs and prototypes of website and mobile application designs </li> <li>Create design systems and styles for design projects</li> </ul>",



        },
    ],

    educations: [
        {
            school: "STMIK Sumedang",
            study: "Bachelor of Computer Science, Technical Information",
        },
    ],
}
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const About = () => {


    return (

        <>

            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-12 justify-center gap-8" >

                    {/* <div className="inline-flex sm:justify-end justify-start bg-red-100">
                            <div className="flex-shrink-0 flex bg-red-600">
                                <h1>About</h1>
                            </div>
                            <Circle />
                            <div className="text-sm bg-slate-300">Hamdan</div>
                        </div> */}


                    <div className="flex justify-start sm:items-start items-center sm:justify-end">
                        <div className="grid grid-flow-row-dense grid-cols-2 sm:grid-cols-2 grid-rows-2">
                            <div className="col-span-1 sm:col-span-2">
                                <h1 className="text-[37px] flex justify-end items-center">About</h1>
                            </div>
                            <div className="flex items-center px-2 ">
                                <Circle />
                            </div>
                            <div className="col-span-3">
                                <h1 className="text-[37px]">Hamdan</h1>
                            </div>
                        </div>
                    </div>


                    {/* <div className="flex bg-red-200">
                            <h2 className="text-gray-900 flex items-center break-words  gap-x-3">About <Circle />  </h2>
                            <h2 className="text-gray-900  gap-x-3">Hamdan </h2>
                        </div> */}
                    <div className="lg:col-span-2">
                        <div className="lg:mt-0 lg:col-span-1 text-xl">
                            <p>
                                Hi there, I have been doing for 2 years as a UI UX Designer. I am a UI/UX designer with WordPress programming Skills.
                            </p>
                            <br />
                            <p>
                                I am a passionate UI/UX designer, creating digital experiences with a strong focus on users, problem solving, innovation and collaboration.
                            </p>
                            <div className="accordion py-1">
                                {aboutMe.experiences.map((item) => (
                                    <div className="py-1">
                                        <div className="border border-gray-900 rounded-xl">
                                            <div className="mx-auto py-2 px-4 sm:py-4 sm:px-6 lg:px-8">

                                                <Disclosure as="div" key={item.role}>
                                                    {({ open }) => (
                                                        <>
                                                            <dt className="text-lg">
                                                                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-900">
                                                                    <span className="font-medium text-gray-900">Experience</span>
                                                                    <span className="ml-6 h-7 flex items-center">
                                                                        <ChevronDownIcon
                                                                            className={classNames(open ? 'rotate-180' : '-rotate-90', 'h-6 w-6 transform')}
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </Disclosure.Button>
                                                            </dt>
                                                            <Disclosure.Panel as="dd" className="mt-2 pr-0">
                                                                <h3>{item.role}</h3>
                                                                <h4>{item.company} | {item.month}</h4>

                                                                <div className="text-base text-gray-900 p-4" dangerouslySetInnerHTML={{ __html: item.description }}></div>

                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <div className="accordion py-1">
                                {aboutMe.educations.map((item) => (
                                    <div className="py-1">
                                        <div className="border border-gray-900 rounded-xl">
                                            <div className=" mx-auto py-2 px-4 sm:py-4 sm:px-6 lg:px-8">

                                                <Disclosure as="div" key={item.school}>
                                                    {({ open }) => (
                                                        <>
                                                            <dt className="text-lg">
                                                                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                                    <span className="font-medium text-gray-900">Education</span>
                                                                    <span className="ml-6 h-7 flex items-center">
                                                                        <ChevronDownIcon
                                                                            className={classNames(open ? 'rotate-180' : '-rotate-90', 'h-6 w-6 transform')}
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </Disclosure.Button>
                                                            </dt>
                                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                                <h3>{item.school}</h3>
                                                                <h4>{item.study}</h4>

                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>



                        </div>

                        <Link to={`/belajar`}>
                            <Button size="outline" to={`/belajar`} className="mt-4">Download Resume</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About

