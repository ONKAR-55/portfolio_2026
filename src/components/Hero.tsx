"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroImage from "../assets/Hero.png";

export default function Hero() {
    return (
        <section className="min-h-screen flex justify-center items-center px-6 pt-20 w-full overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center w-full max-w-[90%] flex flex-col md:flex-row justify-between items-center gap-12"
            >
                {/* Left: Text Content */}
                <div className='text-left flex-1'>
                    <h3 className="text-xl md:text-2xl text-accent tracking-[0.5em] uppercase mb-4"
                        style={{ textShadow: '0 0 20px var(--accent-glow)' }}>
                        Welcome to my Profile
                    </h3>
                    <h1 className="text-6xl md:text-9xl font-large tracking-tighter mb-6 relative"
                        style={{ textShadow: '0 0 40px rgba(255,255,255,0.3)' }}>
                        <span className="glitch-text">ONKAR</span>
                    </h1>
                    <p className="max-w-3xl text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
                        style={{ textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>
                        Full Stack Developer & Cyber Security Enthusiast. <span className='text-accent'>Building and Breaking the limits.</span>
                    </p>

                </div>

                {/* Right: Hero Image */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="shrink-0"
                >
                    <div className="flex flex-col gap-4 relative w-64 h-64 md:w-80 md:h-110">
                        {/* Animated spinning glow ring */}
                        <div className="absolute inset-[-4px] rounded-lg animated-border z-0" />
                        {/* Image container */}
                        <div className="relative w-full h-full rounded-lg border-2 border-accent glow-box overflow-hidden z-10 ">
                            <div className="absolute inset-0 z-10" />
                            <Image
                                src={HeroImage}
                                alt="Onkar - Hero"
                                fill
                                priority
                            />
                        </div>
                        <div className="flex gap-4">
                            <button className="px-10 py-4 bg-accent text-black font-bold text-lg rounded hover:scale-105 transition-transform shadow-[0_0_20px_var(--accent-glow)]">
                                View Projects
                            </button>
                            <button className="px-10 py-4 border border-white/20 hover:bg-white/50 rounded text-lg transition-all hover:border-accent">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}