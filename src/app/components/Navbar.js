import Clock from "./Clock";

//contact function

//divide-x divide-gray-700 divide-opacity-30


export default function Navbar() {
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
                    <span className="absolute inset-0 bg-gray-300 rounded-sm opacity-0 group-hover:opacity-20 transition-opacity"></span>
                    <a href="#contact" className="relative z-10 ">Contact</a>
                </li>
                <li className="px-5 text-center hidden regular:block">
                    <Clock />
                </li>
            </ul>
        </div>
    );
};
