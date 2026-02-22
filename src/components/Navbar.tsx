"use client";

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function Navbar() {
    const { theme } = useTheme();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'CTFs', path: '/ctfs' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-extralight text-accent">
                    ONKAR
                </Link>

                <ul className="flex gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className="relative group text-sm font-medium hover:text-accent transition-colors"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
}
