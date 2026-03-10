"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 w-full max-w-[95%] mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl mb-5 text-center"
            >
                Work <span className="text-accent">&</span> Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <AnimatedCard className="h-full">
                            <div className="p-8 h-full flex flex-col">
                                <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 grow leading-relaxed text-sm">{project.description}</p>
                                <div className="flex gap-2 flex-wrap mb-6">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="text-xs px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3 mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-sm font-semibold rounded-lg hover:bg-accent hover:text-black transition-all"
                                    >
                                        Live <ExternalLink className="w-3 h-3" />
                                    </a>
                                    <Link
                                        href="/projects"
                                        className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-gray-400 text-sm rounded-lg hover:border-white/30 hover:text-white transition-all"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </AnimatedCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
