"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'CTFs', path: '/ctfs' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-extralight text-accent tracking-widest">
                    ONKAR
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className={`relative group text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'hover:text-accent'}`}
                                >
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl overflow-hidden"
                    >
                        <ul className="flex flex-col py-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        onClick={() => setMenuOpen(false)}
                                        className="block px-6 py-3 text-sm font-medium hover:text-accent hover:bg-white/5 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
