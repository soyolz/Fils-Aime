export default function About() {
    return (
        <div className="space-y-2  fixed z-50 h-20 max-w-lg translate-y-[22vh] -translate-x-[18.3vh] font-mono">
            <h1 className="flex text-gray-500 text-vm font-light mb-3">
                ABOUT
            </h1>
            <h1 className="leading-relaxed small:w-[38vh]">
                <span className="font-bold">Hi, my name is Fritz.</span>
                <span className="font-thin"> I am a software engineer and student at <a href="https://www.fiu.edu/" target="_blank" rel="noopener noreferrer" className="underline hover:decoration-2 decoration-sky-500 hover:font-bold hover:ease-in cursor-pointer">Florida International University</a>. I love building ideas that solve simple and complex tasks.</span>
            </h1>
        </div>
    );
};
