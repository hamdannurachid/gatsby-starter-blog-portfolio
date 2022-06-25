/* This example requires Tailwind CSS v2.0+ */
import React from "react"

import { PuzzleIcon, LightBulbIcon, CursorClickIcon } from '@heroicons/react/outline'
import Section from "./Section"

const features = [
    {
        name: 'Define',
        description:
            'I will define and understand what the main problem is to be solved and our goals.',
        icon: PuzzleIcon,
    },
    {
        name: 'Explore',
        description:
            'Then I explored the solution through low-fi sketches, mockups and tested the prototype.',
        icon: CursorClickIcon,
    },
    {
        name: 'Refine',
        description:
            'Lastly, I simplified the flow and refined it to launch something that users like and understand.',
        icon: LightBulbIcon,
    },
]

export default function Example() {
    return (
        <Section>
            <div className="mb-12 border-t border-gray-300">
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 mt-12">

                    <h1 className="text-gray-900 text-[37px] sm:text-5xl mb-8 text-center">
                        General Approach
                    </h1>

                    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-20">
                        {features.map((feature) => (
                            <div key={feature.name}>
                                <dt>
                                    <div className="flex items-center justify-center mx-auto  h-28 w-28 rounded-full bg-gray-800 text-white">
                                        <feature.icon className="h-12 w-12" aria-hidden="true" />
                                    </div>
                                    <p className="mt-5 text-2xl leading-6 font-bold text-gray-900 text-center">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 text-lg font-medium text-gray-500 text-center">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Section>
    )
}
