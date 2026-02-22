"use client";

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import AnimatedCard from '@/components/AnimatedCard';

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 w-full max-w-[95%] mx-auto">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-black mb-16 text-center tracking-tighter"
            >
                Work <span className="text-accent stroke-text">Projects</span>
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
                                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-8 grow leading-relaxed">{project.description}</p>
                                <div className="flex gap-2 flex-wrap mt-auto">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="text-xs px-3 py-1 bg-white/5 rounded-full border border-white/10 text-gray-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
