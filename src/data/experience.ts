export type ExperienceItem = {
    type: 'education' | 'work';
    title: string;
    organization: string;
    location?: string;
    period: string;
    status: 'current' | 'completed';
    description: string;
    highlights: string[];
};

export const experiences: ExperienceItem[] = [
    // Work Experience (newest first)
    {
        type: 'work',
        title: 'LLM Post Training Intern',
        organization: 'Ethara.ai',
        location: 'Remote',
        period: 'February 2026 - April 2026',
        status: 'completed',
        description:
            'Working as an LLM post-training intern — creating massive datasets and engineering prompts to improve the learning and alignment of large AI models.',
        highlights: [
            'Dataset creation at scale for model training pipelines',
            'Prompt engineering for LLM fine-tuning and RLHF',
            'Evaluating model outputs for quality and consistency',
        ],
    },
    {
        type: 'work',
        title: 'Web Application Security Team Lead',
        organization: 'CSBC – Cyber Security & Blockchain Club',
        location: 'Sanjivani University',
        period: 'September 2023 - Present',
        status: 'current',
        description:
            'As an active core member of CSBC, I lead web security efforts — organizing workshops, CTF events, and cyber-awareness programs for the university community.',
        highlights: [
            'Conducting cybersecurity workshops for students',
            'Designing and leading CTF challenges',
            'Guiding juniors on web security concepts',
            'Running cyber crime awareness programs',
        ],
    },
    // Education
    {
        type: 'education',
        title: 'B.Tech, Cyber Security',
        organization: 'Sanjivani University',
        period: 'July 2024 - Present',
        status: 'current',
        description:
            'Currently pursuing a specialized degree in Cyber Security from Sanjivani University. Immersed in core areas including secure programming, network analysis, and vulnerability research. actively engaged in building real-world security tools and participating in Capture The Flag (CTF) competitions.',
        highlights: [
            'Essentials of Cyber Security',
            'Network Protocols & Configuration',
            'Data Structures & Algorithms',
            'Full-Stack Development',
            'Database Management Systems',
            'Financial & Risk Management',
            'VAPT (Vulenerability Assessment and Penetration Testing)',
            'Computer Forensics & Cyber Law'
        ],
    },
];
