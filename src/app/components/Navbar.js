'use client'

import Clock from "./Clock";
import { Button, Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import { useState } from 'react'

//contact function

//divide-x divide-gray-700 divide-opacity-30


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    function open(){
        setIsOpen(true)
    }

    function close(){
        setIsOpen(false)
    }

    return (
        <div className="fixed z-50 h-10 max-w-lg md:translate-y-[14vh] translate-y-[15vh] -translate-x-1/2  bg-white border shadow-md border-gray-200 dark:border-gray-500/25 rounded-md left-1/2 dark:bg-black dark:border-gray-500">
            <ul className="flex items-center justify-between px-4 py-2 text-sm font-mono divide-x divide-gray-700 divide-opacity-30">


                <li className="relative px-5 text-center group">
                    <span className="absolute inset-0 bg-gray-300 rounded-sm opacity-0 group-hover:opacity-20 transition-opacity"></span>
                    <a href="#about" className="relative z-10 ">About</a>
                </li>


                <li className="relative px-5 text-center group">
                    <span className="absolute inset-0 bg-gray-300 rounded-sm opacity-0 group-hover:opacity-20 transition-opacity"></span>
                    <a href="#projects" className="relative z-10 ">Projects</a>
                </li>


                <li className="relative px-5 text-center group">
                    <span className="absolute inset-0 bg-gray-300 rounded-sm opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></span>
                    <button onClick={open} className="relative z-10">Contact</button>
                </li>

                <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                    <DialogBackdrop className="transition fixed inset-0 backdrop-blur-sm" />
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto font-mono">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <DialogPanel transition className="w-full max-w-md rounded-md shadow-lg bg-black border border-gray-500/25 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
                                <p className="text-white">
                                    Contact me! 😃
                                </p>
                                <div className="mt-4 space-x-5">
                                    <Button onClick={() => window.open("https://www.linkedin.com/in/fritzffa", "_blank")} className="inline-flex items-center rounded-md bg-black py-1.5 px-5  text-sm/6 font-semibold text-white shadow-sm focus:outline-none data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700">
                                        LinkedIn
                                    </Button>
                                    <Button className="inline-flex items-center rounded-md bg-black py-1.5 px-5 text-sm/6 font-semibold text-white shadow-sm focus:outline-none data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700">
                                        Resume
                                    </Button>
                                    <Button onClick={() => window.open("https://github.com/soyolz", "_blank")} className="inline-flex items-center rounded-md bg-black py-1.5 px-5 text-sm/6 font-semibold text-white shadow-sm focus:outline-none data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700">
                                        Github
                                    </Button>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>

                <li className="px-5 text-center hidden regular:block">
                    <Clock />
                </li>

            </ul>
        </div>
    );
};
