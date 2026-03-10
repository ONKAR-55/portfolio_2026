"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, MapPin, Calendar, CheckCircle2, Zap } from "lucide-react";
import { experiences, type ExperienceItem } from "@/data/experience";

function TimelineCard({ item, index }: { item: ExperienceItem; index: number }) {
    const isWork = item.type === "work";
    const Icon = isWork ? Briefcase : GraduationCap;

    const dotClass = "relative w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 border border-white/10 bg-black/80 backdrop-blur-sm group-hover:border-accent group-hover:shadow-[0_0_16px_var(--accent-glow)] transition-all duration-500";
    const cardClass = "flex-1 mb-12 p-4 md:p-8 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md group-hover:border-accent/40 group-hover:bg-black/80 transition-all duration-500 shadow-xl";
    const badgeClass = isWork
        ? "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border text-accent border-accent/30 bg-accent/10"
        : "text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border text-purple-400 border-purple-400/30 bg-purple-400/10";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex gap-0 md:gap-10 group"
        >
            {/* Timeline spine + dot */}
            <div className="flex flex-col items-center">
                <div className={dotClass}>
                    <Icon className="w-5 h-5 md:w-9 md:h-9 text-accent" />
                    {item.status === "current" && (
                        <span className="absolute -top-1 -right-1 w-3 h-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                        </span>
                    )}
                </div>
                {/* Vertical line */}
                <div className="w-px flex-1 bg-linear-to-b from-white/10 to-transparent mt-2" />
            </div>

            {/* Content card */}
            <div className={cardClass}>
                {/* Badge row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={badgeClass}>
                        {isWork ? "Experience" : "Education"}
                    </span>
                    {item.status === "current" && (
                        <span className="text-xs font-semibold text-green-400 border border-green-400/30 bg-green-400/10 px-3 py-1 rounded-full flex items-center gap-1">
                            <Zap className="w-3 h-3" /> Currently Active
                        </span>
                    )}
                </div>

                {/* Title + Org */}
                <h3 className="text-2xl md:text-3xl font-black text-white mb-1 leading-tight group-hover:text-accent transition-colors duration-300">
                    {item.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400 mb-4">
                    <span className="font-semibold text-gray-300">{item.organization}</span>
                    {item.location && (
                        <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" /> {item.location}
                        </span>
                    )}
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {item.period}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                    {item.description}
                </p>

                {/* Highlights */}
                <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-3">
                        {isWork ? "Responsibilities" : "Relevant Focus Areas"}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.highlights.map((h) => (
                            <div key={h} className="flex items-start gap-2 text-sm text-gray-300">
                                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                {h}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Experience() {
    const workItems = experiences.filter((e) => e.type === "work");
    const eduItems = experiences.filter((e) => e.type === "education");

    return (
        <section className="py-20 px-3 w-full max-w-[90%] mx-auto">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl mb-4">
                    Experience &amp; <span className="text-accent">Learning</span>
                </h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto">
                    My professional journey and academic path in cybersecurity and software development.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
                {/* Work Column */}
                <div>
                    <div className="flex items-center gap-3 mb-10">
                        <Briefcase className="w-5 h-5 text-accent" />
                        <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400">
                            Work Experience
                        </h3>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                    <div>
                        {workItems.map((item, i) => (
                            <TimelineCard key={item.title} item={item} index={i} />
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-3 mb-10">
                        <GraduationCap className="w-5 h-5 text-purple-400" />
                        <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400">
                            Education
                        </h3>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>
                    <div>
                        {eduItems.map((item, i) => (
                            <TimelineCard key={item.title} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
