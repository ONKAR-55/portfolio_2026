export type ProjectAsset = {
    title: string;
    src: string;
};

export type Project = {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    technologies: string[];
    link: string;
    category: string;
    assets?: ProjectAsset[];
};

export const projects: Project[] = [
    {
        title: "SOC-Guard",
        category: "Network Security, Software Engineering",
        description:
            "A SOC dashboard built to detect and monitor the supecious activity in the network and minitor the incoming and outgoing traffic.",
        features: [
            "Real-time Threat Detection — Monitor realtime supecious activity and blocking the IP",
            "Network traffic analysis — Analyze the incoming and outgoing traffic.",
            "Real-time system monitoring — Monitoring system processes and watch logs.",
        ],
        benefits: [
            "Real-time IP Tracking",
            "Easy to use interface",
            "Real-time system monitoring",
        ],
        technologies: ["Next.js", "Tailwind CSS", "Lucide React", "TypeScript", "Python", "Djnago", "SQLite3", "Redis"],
        link: "https://github.com/ONKAR-55/SOC-Guard.git",
        assets: [
            { title: "Dashboard Overview", src: "/Projects SS/SOC-Guard/Dashboard_1.png" },
            { title: "Analytics & Diagnostics", src: "/Projects SS/SOC-Guard/Dashboard_2.png" },
            { title: "Live Traffic Monitor", src: "/Projects SS/SOC-Guard/LiveTraffic.png" },
            { title: "IP & Threat Blocking", src: "/Projects SS/SOC-Guard/Block.png" },
            { title: "Event & Incident History", src: "/Projects SS/SOC-Guard/History.png" },
            { title: "Authentication Interface", src: "/Projects SS/SOC-Guard/Auth.png" },
            { title: "Source Code Inspector 1", src: "/Projects SS/SOC-Guard/SourceCode_1.png" },
            { title: "Source Code Inspector 2", src: "/Projects SS/SOC-Guard/SourceCode_2.png" },
        ],
    },
    {
        title: "SpicyCorner",
        category: "Web Development",
        description:
            "A fully responsive restaurant website built with React.Js. Focused on delivering a seamless, interactive experience.",
        features: [
            "Responsive Design — Optimized for mobile, tablet, and desktop",
            "Interactive UI Components — Dynamic elements for a seamless UX",
            "Optimized Performance — Lightweight architecture with fast transitions",
            "Modular Codebase — Organized for easy scalability and maintenance",
        ],
        benefits: [
            "Enhanced User Experience with intuitive navigation",
            "High Scalability with modern tooling",
        ],
        technologies: ["React.js", "Tailwind CSS", "Lucide React"],
        link: "https://spicycor.netlify.app/",
        assets: [
            { title: "Landing Page", src: "/Projects SS/SpicyCorner/Landing.png" },
            { title: "Menu Showcase 1", src: "/Projects SS/SpicyCorner/Menu_1.png" },
            { title: "Menu Showcase 2", src: "/Projects SS/SpicyCorner/Menu_2.png" },
            { title: "Food Basket & Cart", src: "/Projects SS/SpicyCorner/Basket.png" },
            { title: "Order Checkout & Tracking", src: "/Projects SS/SpicyCorner/Order.png" },
            { title: "About Us Section", src: "/Projects SS/SpicyCorner/About.png" },
            { title: "Contact & Location", src: "/Projects SS/SpicyCorner/Contact.png" },
        ],
    },
];
