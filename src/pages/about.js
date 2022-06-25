import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"


// import { Link } from "gatsby"

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
            descriptions: [
                "Communication and collaboration with product managers, development teams and clients",
                "Understand problems related to the application that will be made based on the received stakeholder brief",
                "Mapping problem solving from research results that have been carried out in the form of wireframes",
                "Designing sitemaps, wireframes, high fidelity designs and prototypes of website and mobile application designs ",
                "Create design systems and styles for design projects"
            ]
        },
        {
            role: "UI UX Designer",
            company: "NEXT HOUSE LLC, AUSTIN TX",
            month: "JUL 2021 - NOV 2021",
            descriptions: [
                "Doing research related to property investment application development",
                "Perform UI/UX design of mobile applications for IOS from the provided wireframe concept",
                "Design, create and define logos and brand identities for apps",
                "Creating website designs for application marketing ",
            ]
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
            <SEO title="About" />


            <Section>

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
                                    <h1 className="text-[37px] sm:text-5xl flex justify-end items-center">About</h1>
                                </div>
                                <div className="flex items-center px-2 ">
                                    <Circle />
                                </div>
                                <div className="col-span-3">
                                    <h1 className="text-[37px] sm:text-5xl">Hamdan</h1>
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

                                    <div className="py-1">
                                        <div className="border border-gray-900 rounded-xl">
                                            <div className="mx-auto py-2 px-4 sm:py-4 sm:px-6 lg:px-8">

                                                <Disclosure as="div">
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
                                                            <Disclosure.Panel as="dd" className="mt-4 pr-0">

                                                                {aboutMe.experiences.map((item, i) => (
                                                                    <div className="mb-6">
                                                                        <h4 className="text-2xl font-bold">{item.role}</h4>
                                                                        <p className="text-base">{item.company} | {item.month}</p>
                                                                        <ul className="list-disc list-inside text-base text-gray-600 mt-2" key={i}>
                                                                            {item.descriptions.map(description => (
                                                                                <li className="mb-2 leading-5">{description}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}

                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>

                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className="accordion py-1">
                                    {aboutMe.educations.map((item) => (
                                        <div className="py-1">
                                            <div className="border border-gray-900 rounded-xl">
                                                <div className=" mx-auto py-2 px-4 sm:py-4 sm:px-6 lg:px-8 ">

                                                    <Disclosure as="div" key={item.school}>
                                                        {({ open }) => (
                                                            <>
                                                                <dt className="text-lg">
                                                                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-900">
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
                                                                    <h4 className="texttext-xl font-bold">{item.school}</h4>
                                                                    <p className="text-base">{item.study}</p>

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

                            <a href="https://bit.ly/Hamdannur" target="_blank">
                                <Button size="outline" className="mt-4 gap-x-1 flex items-center">
                                    See Full Resume
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </Button>
                            </a>


                        </div>
                    </div>
                </div>
            </Section>


        </Layout >
    )
}

export default About

