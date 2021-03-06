import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"


import { Link } from "gatsby"

import Button from '../components/Button';
import Circle from '../components/Circle';

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
        <Layout>
            <SEO title="Hamdan Nurachid" />

            <main>
                <Section>
                    <div className="aboutHamdan flex justify-center gap-8" >
                        <div className="w-2/12">
                            <h2 className="text-gray-900 flex items-center break-words  gap-x-3">About <Circle />  </h2>
                            <h2 className="text-gray-900  gap-x-3">Hamdan </h2>
                        </div>
                        <div className="w-6/12">
                            <div className="mt-12 lg:mt-0 lg:col-span-2">
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
                                                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-4 sm:px-6 lg:px-8">

                                                    <Disclosure as="div" key={item.role}>
                                                        {({ open }) => (
                                                            <>
                                                                <dt className="text-lg">
                                                                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                                        <span className="font-medium text-gray-900">Experience</span>
                                                                        <span className="ml-6 h-7 flex items-center">
                                                                            <ChevronDownIcon
                                                                                className={classNames(open ? 'rotate-180' : '-rotate-90', 'h-6 w-6 transform')}
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    </Disclosure.Button>
                                                                </dt>
                                                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                                    <h3>{item.role}</h3>
                                                                    <h4>{item.company} | {item.month}</h4>

                                                                    <div className="text-base text-gray-500 p-4" dangerouslySetInnerHTML={{ __html: item.description }}></div>

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
                                                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-4 sm:px-6 lg:px-8">

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
                </Section>

            </main>
        </Layout >
    )
}

export default About

