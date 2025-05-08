// page.js
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import "./globals.css";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen font-mono">
            <Navbar />

            <main className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="space-y-24">
                    <section id="about" className="animate-fade-in">
                        <About />
                    </section>

                    <section id="projects" className="animate-fade-in delay-100">
                        <Projects />
                    </section>
                </div>
            </main>

            <footer className="mt-auto py-6 text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Fritz Fils-Aime. All rights reserved.</p>
            </footer>
        </div>
    );
}