import Clock from "./Clock";
export default function Navbar() {
    return (
        <div className="fixed z-50 h-10 max-w-lg translate-y-[15vh] -translate-x-1/2 bg-white border shadow-md border-gray-200 dark:border-gray-500/25 rounded-full left-1/2 dark:bg-black dark:border-gray-500">
            <ul className="flex items-center justify-between px-4 py-2 text-sm font-mono divide-x divide-gray-700 divide-opacity-30">
                <li className="px-5 text-center">
                    <a href="#home" className="hover:text-gray-600 dark:hover:text-gray-400">Home</a>
                </li>
                <li className="px-5 text-center">
                    <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-400">About</a>
                </li>
                <li className="px-5 text-center">
                    <a href="#projects" className="hover:text-gray-600 dark:hover:text-gray-400">Projects</a>
                </li>
                <li className="px-5 text-center">
                    <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-400">Contact</a>
                </li>
                <li className="px-5 text-center">
                    <Clock />
                </li>
            </ul>
        </div>
    );
};