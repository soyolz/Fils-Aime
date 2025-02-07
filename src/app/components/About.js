'use client'

import {Popover, PopoverButton, PopoverPanel} from "@headlessui/react";
import {PlusIcon} from '@heroicons/react/20/solid'
import {useState} from "react";
import Image from 'next/image'
import mdc from './icons/mdcicon.jpg';
import fiu from './icons/fiuicon.jpg';


//            <p>{university.description}</p>

// University Data

const universityData = {

    FIU: {
        name: "Florida International University",
        major: "Bachelors, Computer Software Design and Development",
        description: "Finishing my bachelors in  ",
        date: "2025-2026",
        icon: fiu,
        courses: ["3200 -", " 3337 -", " 4421 -", " 4933"]
    },

    MDC: {
        name: "Miami Dade College",
        major: "Associates, Computer Science",
        description: "A University",
        date: "2021-2023",
        icon: mdc,
        courses: ["3200 -", " 3337 -", " 4421 -", " 4933"]
    }
}

//This code is for when a person click on the button - the selected text would be displayed
export function renderSelectedUniversity(selectedUniversity) {
    const university = universityData[selectedUniversity]
    return (
        <section className="left-1/2 text-white leading-relaxed max-w-25">

            <div className="flex items-center gap-36">
                <div className="flex flex-col">
                    <p className="text-gray-300">{university.name}</p>
                </div>
                <Image className="h-8 w-8 rounded-sm" src={university.icon} alt=""/>
            </div>
            <h4 className="max-w-96 font-mono">{university.major}</h4>
            <p className="italic font-thin">{university.date}</p>
            <p className="font-thin">Relevant Course Work: {university.courses}</p>
        </section>
    );
}

export default function About() {

    const [selectedUniversity, setSelectedUniversity] = useState("FIU")

    return (

        //About Me + School Information

        <div
            className="regular:space-y-3 fixed max-w-lg regular:translate-y-[24vh] extra:translate-y-[22vh] regular:-translate-x-[27vh] extra:-translate-x-[18.3vh] font-mono">
            <h1 className="flex text-gray-500 text-vm font-light mb-3">
                ABOUT
            </h1>
            <h1 className="leading-relaxed">
                <span className="font-bold">Hi, my name is Fritz.</span>
                <span className="font-thin"> I am a software engineer and student at <a href="https://www.fiu.edu/"
                                                                                        target="_blank"
                                                                                        rel="noopener noreferrer"
                                                                                        className="underline hover:decoration-2 decoration-sky-500 hover:font-bold hover:ease-in cursor-pointer ">Florida International University</a>. I love building ideas that solve simple and complex tasks.</span>
            </h1>
            <Popover>
                <PopoverButton className="focus:outline-none font-mono">
                    <div className="flex items-center text-gray-500 font-light">
                        <PlusIcon aria-hidden="true" className="w-5 h-3"/>
                        <h1>EDUCATION</h1>
                    </div>
                </PopoverButton>

                <PopoverPanel anchor="left"
                              className="divide-y text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0">
                    <div className="p-2">

                        <button className="block rounded-lg py-x px-3"
                                onClick={() => setSelectedUniversity("FIU")}>
                            <p className="font-semibold text-white">Florida International University</p>
                            <p className="text-white/50">Bacheclors In Software Development <span
                                className="italic font-bold">2024-2025</span>.</p>
                        </button>

                        <button className="block rounded-lg py-x px-3"
                                onClick={() => setSelectedUniversity("MDC")}>
                            <p className="font-semibold text-white">Miami Dade College</p>
                            <p className="text-white/50">Associates In Computer Science <span
                                className="italic font-bold">2021-2023</span>.</p>
                        </button>
                    </div>
                </PopoverPanel>
                <div className="leading-relaxed">{renderSelectedUniversity(selectedUniversity)}</div>
            </Popover>
        </div>
    );
};
