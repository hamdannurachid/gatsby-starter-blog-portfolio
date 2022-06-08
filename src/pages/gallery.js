import * as React from 'react'
import Section from "../components/Section"


import galleryData from "../../contents/gallery-content.json"

const gallery = galleryData.students;


const Gallery = () => {
    return (
        <div>



            <Section>
                <div className="flex justify-center gap-8" >
                    <div className="lg:w-8/12 sm:w-full">
                        <div className="mt-12 lg:mt-0 lg:col-span-2">
                            <div className="flex items-center gap-x-2">
                                <h2 className="text-gray-900 text-[53px]">
                                    Featured Work
                                </h2>
                            </div>

                            {
                                gallery.map((item) => (
                                    <div key={item.name}>
                                        <h1>{item.name}</h1>
                                    </div>
                                ))
                            }

                        </div>

                    </div>

                </div>
            </Section>



        </div>
    )
}

export default Gallery