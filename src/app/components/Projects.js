'use client'

import { useState, Fragment } from 'react';
import { Transition, Dialog} from '@headlessui/react';
import Image from 'next/image'
import {
    car,
    carDesc,
    carMMY,
    carName,
    login,
    modList,
    mods,
    signUp,
    contact,
    portfolio
} from '@/app/components/photos/index.js'

// Object 
const projectData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Personal portfolio website built with Next.js and Tailwind CSS",
        image:[portfolio, contact],
        link: "https://www.fils.lol",
        alt:"Portfolio project",
        tags: ["Next.js", "React", "Tailwind CSS"],
        featured: false
    },
    {
        id: 2,
        title: "Tuner.io (Current)",
        description: "A website designed for gauging performance outcomes.",
        image:[car, carDesc, carMMY, carName, login, modList, mods, signUp ],
        link: "NOT YET FINISHED",
        tags: ["Svelte", "Svelte Kit", "Tailwind CSS", "Firebase", "Firebase Auth"],
        alt:"Tuner.io project",
        featured: true
    },
];

export default function Projects() {

    // state variable declartions  
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [filter, setFilter] = useState("all");
    const [currentImage, setCurrentImage] = useState(0)

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    const filteredProjects = filter === "all"
        ? projectData
        : projectData.filter(project => project.featured);

    return (
        <div className="space-y-8">

            {/* Feature Filter*/}
            <div className="flex justify-between items-center">
                <h2 className="section-heading">Projects</h2>

                <div className="flex space-x-2">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-3 py-1 text-sm rounded-md transition-colors ${
                            filter === "all"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter("featured")}
                        className={`px-3 py-1 text-sm rounded-md transition-colors ${
                            filter === "featured"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }`}
                    >
                        Featured
                    </button>
                </div>
            </div>
            
            {/* Project Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="card group hover:border-blue-500/30"
                    >
                        <h3 className="text-xl font-medium mb-2 group-hover:text-blue-500">
                            {project.title}
                            {project.featured && (
                                <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                                    Featured
                                </span>
                            )}
                        </h3>

                        <p className="text-gray-400 mb-4">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <button
                            onClick={ () => {
                                openModal()
                                setSelectedProject(project)
                                currentImage = 0
                            }}
                            className="inline-flex items-center text-blue-500 hover:text-red-500"
                        >
                            View Project
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
            {/*Modal For Project Images*/}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="realtive z-50" onClose={closeModal}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm"></div>
                    </Transition.Child>


                    {/* Need to fix the image styling and the image limit
                    */}

                    {selectedProject && (
                    <div className='fixed inset-0 overflow-auto'>
                        <div className='flex min-h-full items-center justify-center'>
                            <Transition.Child
                            as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900/20 border border-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 mb-4">
                                    {selectedProject.title}
                                    </Dialog.Title>
                                    <Image 
                                        src={selectedProject.image[currentImage]}
                                        alt={selectedProject.alt}
                                        width={1000}
                                        height={1000}
                                        className=""
                                    />
                                    <button onClick={() => {
                                        setCurrentImage(prev =>
                                        (prev + 1) % selectedProject.image.length
                                        );
                                    }}
                                    className="inline-flex items-center text-blue-500 hover:text-red-500"
                                    > 
                                        Next            
                                    </button>
                                {/* <button onClick={ () => {
                                        setCurrentImage(currentImage - 1);
                                    }}
                                    className="inline-flex items-center text-blue-500 hover:text-red-500"
                                    > 
                                        Back            
                                    </button>
                                                    */}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                    )};
                </Dialog>
            </Transition>
        </div>
    );
}

