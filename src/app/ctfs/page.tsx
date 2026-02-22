"use client";

import { motion } from "framer-motion";
import { ExternalLink, Flag, Shield, Terminal } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import { ctfChallenges } from "@/data/ctfs";

const tagColors: Record<string, string> = {
    Web: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    HTTP: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    Reconnaissance: "text-green-400 border-green-400/30 bg-green-400/10",
    OSINT: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    Encoding: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    JavaScript: "text-yellow-300 border-yellow-300/30 bg-yellow-300/10",
    "Source Code": "text-orange-400 border-orange-400/30 bg-orange-400/10",
    Discovery: "text-pink-400 border-pink-400/30 bg-pink-400/10",
    Enumeration: "text-red-400 border-red-400/30 bg-red-400/10",
};

export default function CTFsPage() {
    return (
        <main className="min-h-screen pt-28 pb-20 px-6 w-full max-w-[95%] mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <div className="flex items-center justify-center gap-4 mb-6">
                    <Shield className="w-10 h-10 text-accent" />
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                        CTF <span className="text-accent">Challenges</span>
                    </h1>
                    <Flag className="w-10 h-10 text-accent" />
                </div>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    A collection of Capture The Flag challenges I&apos;ve built. Each one is a puzzle designed to test web security knowledge, creative thinking, and technical skills.
                </p>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Terminal className="w-4 h-4" />
                    <span>{ctfChallenges.length} challenges available</span>
                </div>
            </motion.div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ctfChallenges.map((challenge, index) => (
                    <motion.div
                        key={challenge.name}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                        <AnimatedCard className="h-full group">
                            <div className="p-8 flex flex-col h-full min-h-[280px]">
                                {/* Challenge Number + Name */}
                                <div className="flex items-start gap-4 mb-5">
                                    <span className="text-5xl font-black text-accent/20 group-hover:text-accent/40 transition-colors leading-none select-none">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors leading-tight">
                                            {challenge.name}
                                        </h2>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed mb-6 grow">
                                    {challenge.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {challenge.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`text-xs px-3 py-1 rounded-full border font-medium ${tagColors[tag] ?? "text-gray-400 border-gray-600/30 bg-gray-600/10"}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href={challenge.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 text-accent font-semibold rounded-lg hover:bg-accent hover:text-black transition-all duration-300 w-fit group/btn"
                                >
                                    <span>Launch Challenge</span>
                                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </AnimatedCard>
                    </motion.div>
                ))}
            </div>

            {/* Bottom callout */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-20 text-center"
            >
                <AnimatedCard className="inline-block">
                    <div className="px-10 py-6 flex items-center gap-3">
                        <Flag className="w-5 h-5 text-accent shrink-0" />
                        <p className="text-gray-400 text-sm">
                            All challenges are hosted live. Try to find the flag — good luck!
                        </p>
                    </div>
                </AnimatedCard>
            </motion.div>
        </main>
    );
}
