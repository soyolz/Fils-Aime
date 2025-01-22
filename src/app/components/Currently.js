'use client'
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon} from '@heroicons/react/20/solid'
import {useState} from "react";
import Image from 'next/image'
import mdc from './icons/mdcicon.jpg';
import fiu from './icons/fiuicon.jpg';

// University Data

const universityData ={

    FIU: {
        name:"Florida International University",
        major:"Bachelors, Computer Software Design and Development",
        description:"Bachelors, Computer Software Design and Development ",   
        date:"2025-2026",
        icon: fiu,
        courses:["3200 -"," 3337 -"," 4421 -"," 4933"]
    },

    MDC:{
        name:"Miami Dade College",
        major:"Associates, Computer Science",
        description:"A University",   
        date:"2021-2023",
        icon: mdc,
        courses:["3200 -"," 3337 -"," 4421 -"," 4933"]
    }
}

//need to add code so tha I can hover over an image and it will pop up and the link would go to the respective college website

//This code is for when a person click on the button - the selected text would be displayed
export function renderSelectedUniversity(selectedUniversity){
    const university = universityData[selectedUniversity] 
        return(
            <section className="left-1/2 text-white leading-relaxed max-w-25">

            <div className="flex items-center gap-36">
                <div className="flex flex-col">
                <p className="text-gray-300">{university.name}</p>
                </div>
                <Image className="h-8 w-8 rounded-sm" src={university.icon} alt="" />
            </div>
                <h4 className="max-w-96 font-mono">{university.major}</h4>         
                <p>{university.description}</p>
                <p className="italic font-thin">{university.date}</p>
                <p className="font-thin">Relevant Course Work: {university.courses}</p>
            </section>
        );
    }

// This code is for when you click on the button it allows for your text to be seen
export default function Currently() {

    const [selectedUniversity, setSelectedUniversity] = useState("FIU")

    return (
        <Popover>
            <PopoverButton className="fixed focus:outline-none z-50 h-20 max-w-sm translate-y-[33vh] -translate-x-[18.3vh] font-mono">
            <div className="flex items-center text-gray-500 font-light">
                    <h1>EDUCATION</h1>
                    <ChevronDownIcon aria-hidden="true" className="w-5 h-3" />
                </div>
            </PopoverButton>

        <PopoverPanel anchor="left"
            className="divide-y text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0">
            <div className="p-2">

            <button className="block rounded-lg py-x px-3" 
            onClick={() => setSelectedUniversity("FIU")}>
                <p className="font-semibold text-white">Florida International University</p>
                <p className="text-white/50">Bacheclors In Software Development <span className="italic font-bold">2024-2025</span>.</p>
            </button>

            <button className="block rounded-lg py-x px-3" 
            onClick={() => setSelectedUniversity("MDC")}>
                <p className="font-semibold text-white">Miami Dade College</p>
                <p className="text-white/50">Associates In Computer Science <span className="italic font-bold">2021-2023</span>.</p>
            </button>

            </div>

        </PopoverPanel>
            <div className="fixed z-50 h-20 max-w-lg translate-y-[38vh] -translate-x-[18.3vh] font-mono">{renderSelectedUniversity(selectedUniversity)}</div>
        </Popover>
    );
};
