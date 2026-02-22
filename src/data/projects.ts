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
        technologies: ["React.js", "Next.js", "Tailwind CSS", "Lucide React", "Context API"],
        link: "https://spicycor.netlify.app/",
    },
];
