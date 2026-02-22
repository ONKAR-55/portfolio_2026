"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import Link from "next/link";

const contactLinks = [
    {
        label: "GitHub",
        value: "github.com/ONKAR-55",
        href: "https://github.com/ONKAR-55",
        icon: Github,
        description: "Explore my projects, repos and open-source contributions.",
        color: "hover:text-white text-gray-300",
        borderColor: "hover:border-white/40",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/onkar-552d",
        href: "https://www.linkedin.com/in/onkar-552d",
        icon: Linkedin,
        description: "Connect with me professionally and follow my career journey.",
        color: "hover:text-blue-400 text-gray-300",
        borderColor: "hover:border-blue-400/40",
    },
    {
        label: "Email",
        value: "onkar.work25@gmail.com",
        href: "mailto:onkar.work25@gmail.com",
        icon: Mail,
        description: "Drop me an email for collaborations, freelance or just to say hi.",
        color: "hover:text-accent text-gray-300",
        borderColor: "hover:border-accent/40",
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-28 pb-20 px-6 w-full max-w-[90%] mx-auto flex flex-col items-center">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4">
                    GET IN <span className="text-accent">TOUCH</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                    Whether it&apos;s a project, a collaboration, or just a friendly conversation — I&apos;m always open to connect.
                </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
                {contactLinks.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <a
                                href={item.href}
                                target={item.label !== "Email" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="block h-full group"
                            >
                                <AnimatedCard className="h-full">
                                    <div className="p-8 flex flex-col gap-5 h-full min-h-[240px] bg-black/65">
                                        {/* Icon + Label */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                                                    <Icon className="w-6 h-6 text-accent" />
                                                </div>
                                                <span className="text-xl font-bold text-white">{item.label}</span>
                                            </div>
                                            <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-500 text-sm leading-relaxed grow">
                                            {item.description}
                                        </p>

                                        {/* Value */}
                                        <div className="pt-4 border-t border-white/5">
                                            <span className="text-sm font-mono text-accent/80 group-hover:text-accent transition-colors break-all">
                                                {item.value}
                                            </span>
                                        </div>
                                    </div>
                                </AnimatedCard>
                            </a>
                        </motion.div>
                    );
                })}
            </div>

            {/* Quick Action Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full"
            >
                <AnimatedCard isStatick={true}>
                    <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-black/80">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">Ready to collaborate?</h3>
                            <p className="text-gray-500 text-sm">
                                Open to internships, freelance gigs, and CTF team invites.
                            </p>
                        </div>
                        <div className="flex gap-4 shrink-0">
                            <a
                                href="mailto:onkar.work25@gmail.com"
                                className="inline-flex items-center gap-2 px-7 py-3 bg-accent text-black font-bold rounded-lg hover:scale-105 transition-transform shadow-[0_0_20px_var(--accent-glow)]"
                            >
                                <Send className="w-4 h-4" />
                                Send Email
                            </a>
                            <a
                                href="https://github.com/ONKAR-55"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 hover:border-accent rounded-lg font-semibold transition-all hover:bg-white/5"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </AnimatedCard>
            </motion.div>
        </main>
    );
}
