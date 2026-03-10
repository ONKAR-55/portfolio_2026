"use client";

import Image from 'next/image';
import AnimatedCard from '@/components/AnimatedCard';
import { developmentSkills, cyberSecuritySkills, type Skill } from '@/data/skills';

function SkillCard({ skill }: { skill: Skill }) {
    return (
        <AnimatedCard className="group">
            <div className="h-36 flex items-center justify-center flex-col gap-3 p-4">
                <div className="relative w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image
                        src={skill.icon}
                        alt={skill.name}
                        fill
                        className="object-contain drop-shadow-[0_0_8px_var(--accent-glow)]"
                        unoptimized // some URLs are redirects/webp blobs that can't be optimized
                    />
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors text-center leading-tight">
                    {skill.name}
                </span>
            </div>
        </AnimatedCard>
    );
}

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
    return (
        <div className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold mb-8 text-gray-300 text-center tracking-widest uppercase">
                {title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="py-20 px-6 w-full max-w-[95%] mx-auto">
            <h2 className="text-4xl md:text-5xl mb-16 text-accent text-center tracking-widest">
                Technical Expertise
            </h2>
            <SkillGroup title="Development" skills={developmentSkills} />
            <SkillGroup title="Cyber Security" skills={cyberSecuritySkills} />
        </section>
    );
}
