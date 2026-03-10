export type Project = {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    technologies: string[];
    link: string;
    category: string;
};

export const projects: Project[] = [
    {
        title: "I-Guard",
        category: "AI & Network Security",
        description:
            "A high performance network and system analyzer and threat detection tool built with modern frontend tooling. Focused on delivering a seamless, interactive experience for users with fast load times and a clean modular codebase.",
        features: [
            "Real-time Threat Detection — AI-powered analysis of network traffic and system logs for instant anomaly detection",
            "Interactive UI Components — Dynamic elements for a seamless UX",
            "Optimized Performance — Lightweight architecture with fast transitions",
            "Modular Codebase — Organized for easy scalability and maintenance",
        ],
        benefits: [
            "Enhanced User Experience with intuitive navigation",
            "High Scalability with modern tooling",
        ],
        technologies: ["Next.js", "Tailwind CSS", "Lucide React", "Djnago", "Redis", "Docker"],
        link: "https://github.com/ONKAR-55/AI-Threat-Hunter.git",
    },
    {
        title: "SpicyCor – Restaurant Website",
        category: "Web Development",
        description:
            "A fully responsive restaurant website built with modern frontend tooling. Focused on delivering a seamless, interactive experience for diners with fast load times and a clean modular codebase.",
        features: [
            "Responsive Design — Optimized for mobile, tablet, and desktop",
            "Interactive UI Components — Dynamic elements for a seamless UX",
            "Optimized Performance — Lightweight architecture with fast transitions",
            "Modular Codebase — Organized for easy scalability and maintenance",
        ],
        benefits: [
            "Enhanced User Experience with intuitive navigation",
            "Developer Friendly — Clean, documented code",
            "High Scalability with modern tooling",
        ],
        technologies: ["React.js","Tailwind CSS", "Lucide React",],
        link: "https://spicycor.netlify.app/",
    },
];
