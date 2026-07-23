"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2, Sparkles, Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import { projects, Project } from "@/data/projects";

type ModalState = {
    projectTitle: string;
    assetIndex: number;
} | null;

export default function ProjectsPage() {
    const [activeModal, setActiveModal] = useState<ModalState>(null);
    const [openAssets, setOpenAssets] = useState<Record<string, boolean>>({});

    const toggleAssets = (projectTitle: string) => {
        setOpenAssets((prev) => ({
            ...prev,
            [projectTitle]: !prev[projectTitle],
        }));
    };

    const activeProject: Project | undefined = activeModal
        ? projects.find((p) => p.title === activeModal.projectTitle)
        : undefined;

    const handlePrevAsset = useCallback(() => {
        if (!activeModal || !activeProject || !activeProject.assets) return;
        const total = activeProject.assets.length;
        setActiveModal({
            projectTitle: activeModal.projectTitle,
            assetIndex: (activeModal.assetIndex - 1 + total) % total,
        });
    }, [activeModal, activeProject]);

    const handleNextAsset = useCallback(() => {
        if (!activeModal || !activeProject || !activeProject.assets) return;
        const total = activeProject.assets.length;
        setActiveModal({
            projectTitle: activeModal.projectTitle,
            assetIndex: (activeModal.assetIndex + 1) % total,
        });
    }, [activeModal, activeProject]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!activeModal) return;
            if (e.key === "Escape") {
                setActiveModal(null);
            } else if (e.key === "ArrowLeft") {
                handlePrevAsset();
            } else if (e.key === "ArrowRight") {
                handleNextAsset();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeModal, handlePrevAsset, handleNextAsset]);

    return (
        <main className="min-h-screen pt-28 pb-20 px-6 w-full max-w-[95%] mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
                    MY <span className="text-accent">PROJECTS</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                    A showcase of things I&apos;ve built — from full-stack web apps to security tools.
                </p>
            </motion.div>

            {/* Projects List */}
            <div className="flex flex-col gap-12">
                {projects.map((project, index) => {
                    const isOpen = !!openAssets[project.title];
                    const hasAssets = project.assets && project.assets.length > 0;

                    return (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <AnimatedCard>
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

                                    {/* Toggle Assets Button */}
                                    {hasAssets && (
                                        <div className="mt-6">
                                            <button
                                                onClick={() => toggleAssets(project.title)}
                                                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/5 border border-accent/30 text-accent font-semibold text-sm hover:bg-accent/10 hover:border-accent hover:shadow-[0_0_20px_var(--accent-glow)] active:scale-95 transition-all duration-300 cursor-pointer"
                                            >
                                                <ImageIcon className="w-4 h-4" />
                                                <span>
                                                    {isOpen
                                                        ? "Hide Assets & Screenshots"
                                                        : `Show Assets & Screenshots (${project.assets!.length})`}
                                                </span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-300 ${
                                                        isOpen ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </button>
                                        </div>
                                    )}

                                    {/* Smooth Animated Assets Container */}
                                    <AnimatePresence initial={false}>
                                        {hasAssets && isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-8 mt-6 border-t border-white/10">
                                                    <div className="flex items-center justify-between mb-5">
                                                        <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400 flex items-center gap-2">
                                                            <ImageIcon className="w-4 h-4 text-accent" />
                                                            Project Assets & Screenshots ({project.assets!.length})
                                                        </h3>
                                                        <span className="text-xs text-gray-500 font-medium hidden sm:inline-block">
                                                            Click any screenshot to expand
                                                        </span>
                                                    </div>

                                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                                        {project.assets!.map((asset, assetIndex) => (
                                                            <div
                                                                key={asset.src}
                                                                onClick={() =>
                                                                    setActiveModal({
                                                                        projectTitle: project.title,
                                                                        assetIndex,
                                                                    })
                                                                }
                                                                className="group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden cursor-pointer hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 shadow-md"
                                                            >
                                                                <div className="aspect-video relative w-full overflow-hidden bg-black/40">
                                                                    <Image
                                                                        src={asset.src}
                                                                        alt={asset.title}
                                                                        fill
                                                                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                                    />
                                                                    {/* Hover Overlay */}
                                                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                                                        <span className="text-xs font-semibold text-white truncate drop-shadow">
                                                                            {asset.title}
                                                                        </span>
                                                                        <span className="text-[10px] text-accent font-medium flex items-center gap-1 mt-0.5">
                                                                            <Maximize2 className="w-3 h-3" /> View Screenshot
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </AnimatedCard>
                        </motion.div>
                    );
                })}
            </div>

            {/* Screenshot Lightbox Modal */}
            <AnimatePresence>
                {activeModal && activeProject && activeProject.assets && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
                        onClick={() => setActiveModal(null)}
                    >
                        <div
                            className="relative w-full max-w-5xl bg-neutral-900/90 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50">
                                <div>
                                    <span className="text-xs uppercase font-bold tracking-widest text-accent">
                                        {activeProject.title} — Asset {activeModal.assetIndex + 1} of {activeProject.assets.length}
                                    </span>
                                    <h4 className="text-lg font-bold text-white">
                                        {activeProject.assets[activeModal.assetIndex].title}
                                    </h4>
                                </div>
                                <button
                                    onClick={() => setActiveModal(null)}
                                    className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Main Display Area */}
                            <div className="relative w-full aspect-video sm:min-h-120 max-h-[70vh] bg-black/80 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={activeProject.assets[activeModal.assetIndex].src}
                                    alt={activeProject.assets[activeModal.assetIndex].title}
                                    fill
                                    priority
                                    className="object-contain p-2"
                                />

                                {/* Prev & Next Buttons */}
                                {activeProject.assets.length > 1 && (
                                    <>
                                        <button
                                            onClick={handlePrevAsset}
                                            className="absolute left-4 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-accent hover:text-black hover:border-accent transition-all shadow-lg"
                                            aria-label="Previous screenshot"
                                        >
                                            <ChevronLeft className="w-6 h-6" />
                                        </button>
                                        <button
                                            onClick={handleNextAsset}
                                            className="absolute right-4 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:bg-accent hover:text-black hover:border-accent transition-all shadow-lg"
                                            aria-label="Next screenshot"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Thumbnail Selector Strip */}
                            <div className="px-6 py-3 border-t border-white/10 bg-black/60 flex items-center gap-3 overflow-x-auto">
                                {activeProject.assets.map((asset, idx) => (
                                    <button
                                        key={asset.src}
                                        onClick={() => setActiveModal({ projectTitle: activeProject.title, assetIndex: idx })}
                                        className={`relative w-16 h-10 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                                            idx === activeModal.assetIndex ? "border-accent scale-105 shadow-[0_0_10px_var(--accent-glow)]" : "border-white/10 opacity-50 hover:opacity-100"
                                        }`}
                                    >
                                        <Image
                                            src={asset.src}
                                            alt={asset.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
