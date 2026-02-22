"use client";

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md mt-10">
            <div className="max-w-[90%] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left: Branding */}
                <div>
                    <Link href="/" className="text-xl font-extralight text-accent tracking-widest">
                        ONKAR
                    </Link>
                    <p className="text-gray-600 text-xs mt-1">
                        Full Stack Developer & Cyber Security Enthusiast
                    </p>
                </div>

                {/* Center: Nav links */}
                <div className="flex gap-6 text-sm text-gray-500">
                    {[
                        { name: 'Projects', path: '/projects' },
                        { name: 'CTFs', path: '/ctfs' },
                        { name: 'Blog', path: '/blog' },
                        { name: 'Contact', path: '/contact' },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className="hover:text-accent transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right: Social Icons */}
                <div className="flex items-center gap-4">
                    <a href="https://github.com/ONKAR-55" target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/onkar-552d" target="_blank" rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:onkar.work25@gmail.com"
                        className="text-gray-600 hover:text-accent transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/5 py-4 text-center text-xs text-gray-700">
                © {year} Onkar · Built with Next.js & Tailwind CSS
            </div>
        </footer>
    );
}
