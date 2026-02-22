"use client";

import React, { ReactNode } from 'react';

interface AnimatedCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    isStatick?: boolean;
}

export default function AnimatedCard({ children, className = "", delay = 0, isStatick = false }: AnimatedCardProps) {
    return (
        <div className={`relative group isolate overflow-hidden rounded-xl p-[2px] ${className}`}>
            {/* Animated Gradient Border */}
            <div className={`absolute inset-[-500%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--accent-color)_50%,transparent_100%)] ${isStatick ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-500`} />

            {/* Static Border (fallback/base) */}
            <div className={`absolute inset-0 rounded-xl border ${isStatick ? "border-white/10" : "border-white/10 group-hover:border-transparent"} transition-colors duration-300`} />

            {/* Content Container with stronger Glass Effect */}
            <div className={`relative h-full w-full bg-black/60 rounded-[10px] backdrop-blur-xl border ${isStatick ? "border-white/5" : "border-white/5 group-hover:border-white/10"} shadow-2xl`}>
                {children}
            </div>
        </div>
    );
}
