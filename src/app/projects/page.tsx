"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Sparkles } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-28 pb-20 px-6 w-full max-w-[95%] mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4">
                    MY <span className="text-accent">PROJECTS</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                    A showcase of things I&apos;ve built — from full-stack web apps to security tools.
                </p>
            </motion.div>

            {/* Projects */}
            <div className="flex flex-col gap-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                        <AnimatedCard isStatick>
                            <div className="p-8 md:p-12">
                                {/* Top Row: Title + Category + Link */}
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                                    <div>
                                        <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2 block">
                                            {project.category}
                                        </span>
                                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                                            {project.title}
                                        </h2>
                                        <p className="text-gray-400 mt-3 max-w-2xl leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-bold rounded-lg hover:scale-105 transition-transform shadow-[0_0_20px_var(--accent-glow)] whitespace-nowrap shrink-0 self-start"
                                    >
                                        Visit Live
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* Two Column: Features + Benefits */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    {/* Features */}
                                    <div>
                                        <h3 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4 flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-accent" />
                                            Features
                                        </h3>
                                        <ul className="space-y-3">
                                            {project.features.map((f) => (
                                                <li key={f} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                                                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h3 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-4 flex items-center gap-2">
                                            <Sparkles className="w-4 h-4 text-accent" />
                                            Benefits
                                        </h3>
                                        <ul className="space-y-3">
                                            {project.benefits.map((b) => (
                                                <li key={b} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                                                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="pt-6 border-t border-white/10">
                                    <h3 className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-4">
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-1.5 text-sm font-medium bg-white/5 border border-accent/20 text-accent/80 rounded-full hover:border-accent hover:text-accent hover:bg-accent/10 transition-all cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedCard>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
