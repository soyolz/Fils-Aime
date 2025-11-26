'use client'

import { useState } from 'react';

// Sample project data - you can expand this with your actual projects
const projectData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Personal portfolio website built with Next.js and Tailwind CSS",
        link: "https://www.fils.lol",
        tags: ["Next.js", "React", "Tailwind CSS"],
        featured: false
    },
    {
        id: 2,
        title: "Tuner.io (Current)",
        description: "A website designed for gauging performance outcomes.",
        link: "NOT YET FINISHED",
        tags: ["Svelte", "Svelte Kit", "Tailwind CSS", "Firebase", "Firebase Auth"],
        featured: true
    },
];

export default function Projects() {
    const [filter, setFilter] = useState("all");

    const filteredProjects = filter === "all"
        ? projectData
        : projectData.filter(project => project.featured);

    return (
        <div className="space-y-8">
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

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-500 hover:text-blue-400"
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
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}