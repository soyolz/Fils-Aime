'use client'

import { useState } from "react";
import Image from 'next/image'
import mdc from './icons/mdcicon.jpg';
import fiu from './icons/fiuicon.jpg';

// University Data
const universityData = {
    FIU: {
        name: "Florida International University",
        major: "Bachelors, Computer Software Design and Development",
        description: "Pursuing advanced software engineering concepts and practical development skills.",
        date: "2025-2026",
        icon: fiu,
        courses: ["3200 - Programming Languages", "3337 - Advanced Programming", "4421 - Software Engineering", "4933 - Senior Project"]
    },
    MDC: {
        name: "Miami Dade College",
        major: "Associates, Computer Science",
        description: "Foundation in computer science principles and programming fundamentals.",
        date: "2021-2023",
        icon: mdc,
        courses: ["COP 1000 - Intro to Programming", "COP 2800 - Java Programming", "CIS 2321 - Systems Analysis", "MAD 2104 - Discrete Mathematics"]
    }
}

export default function About() {
    const [activeTab, setActiveTab] = useState("FIU");

    return (
        <div className="space-y-8">
            <h2 className="section-heading">About</h2>

            <div className="space-y-6">
                <div className="prose">
                    <h1 className="text-2xl font-bold mb-4">Hi, my name is Fritz.</h1>
                    <p className="text-lg">
                        I am a software engineer and student at <a
                        href="https://www.fiu.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 underline">
                        Florida International University
                    </a>.
                        I love building ideas that solve simple and complex tasks.
                    </p>
                </div>

                <div className="pt-4">
                    <h3 className="section-heading">Education</h3>

                    <div className="space-y-6">
                        {/* Education Tabs */}
                        <div className="flex space-x-2 border-b border-gray-700/20">
                            {Object.keys(universityData).map((uniKey) => (
                                <button
                                    key={uniKey}
                                    onClick={() => setActiveTab(uniKey)}
                                    className={`px-4 py-2 text-sm font-medium transition-colors 
                                              ${activeTab === uniKey
                                        ? "border-b-2 border-blue-500 text-blue-500"
                                        : "text-gray-400 hover:text-gray-300"}`}
                                >
                                    {universityData[uniKey].name.split(' ')[0]}
                                </button>
                            ))}
                        </div>

                        {/* Education Content */}
                        <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="text-xl font-medium">
                                        {universityData[activeTab].name}
                                    </h4>
                                    <p className="text-gray-400 mt-1">
                                        {universityData[activeTab].major}
                                    </p>
                                </div>
                                <div className="bg-gray-800 p-1 rounded-md">
                                    <Image
                                        src={universityData[activeTab].icon}
                                        alt={universityData[activeTab].name}
                                        className="h-10 w-10 rounded-sm"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            </div>

                            <p className="italic text-gray-400 mb-2">
                                {universityData[activeTab].date}
                            </p>

                            <p className="mb-4 text-gray-300">
                                {universityData[activeTab].description}
                            </p>
                            <div>
                                <h5 className="text-sm uppercase text-gray-500 mb-2">Relevant Coursework</h5>
                                <ul className="grid grid-cols-2 gap-2">
                                    {universityData[activeTab].courses.map((course, index) => (
                                        <li key={index} className="text-gray-400 text-sm flex items-center">
                                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2"></span>
                                            {course}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}