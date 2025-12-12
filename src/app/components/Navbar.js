'use client'

import { useState, useEffect } from 'react';
import Clock from "./Clock";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Navbar() {

    //STATE DECLARTION  
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        //[] makes this run only once
    }, []);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold">Fritz</a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="nav-item">About</a>
                        <a href="#projects" className="nav-item">Projects</a>
                        <button onClick={openModal} className="nav-item">Contact</button>
                        <div className="border-l border-gray-700/30 pl-6">
                            <Clock />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-4 border-t border-gray-800">
                        <a
                            href="#about"
                            className="block py-2 hover:text-blue-500"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="block py-2 hover:text-blue-500"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Projects
                        </a>
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                openModal();
                            }}
                            className="block w-full text-left py-2 hover:text-blue-500"
                        >
                            Contact
                        </button>
                        <div className="pt-2 border-t border-gray-800">
                            <Clock />
                        </div>
                    </div>
                )}
            </div>

            {/* Contact Modal */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
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
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 mb-4"
                                    >
                                        Let's Connect
                                    </Dialog.Title>

                                    <p className="text-gray-300 mb-6">
                                        Feel free to reach out through any of these platforms. I'm always open to new opportunities and collaborations.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4">
                                        <a
                                            href="https://www.linkedin.com/in/fritzffa"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn flex items-center justify-center p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                                        >
                                            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                            </svg>
                                            LinkedIn
                                        </a>

                                        <a
                                            href="./resume.pdf" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn flex items-center justify-center p-3 rounded-lg bg-green-800 hover:bg-green-800/50 transition-colors"
                                        >
                                            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Resume
                                        </a>

                                        <a
                                            href="https://github.com/soyolz"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn flex items-center justify-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                                        >
                                            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
                                            </svg>
                                            GitHub
                                        </a>

                                        <a
                                            href="mailto:fritzfils7aime@gmail.com"
                                            className="btn flex items-center justify-center p-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
                                        >
                                            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Email
                                        </a>
                                    </div>

                                    <div className="mt-6 text-center">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-700 focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </header>
    );
}