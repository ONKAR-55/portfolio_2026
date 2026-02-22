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
        period: '2024 - Present',
        status: 'current',
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
        period: '2023 - Present',
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
        title: 'B.Tech in Cyber Security',
        organization: 'Sanjivani University',
        period: '2024 - Present',
        status: 'current',
        description:
            'Currently pursuing a specialized degree focused on network security, secure programming, data structures, and threat analysis. My academic journey combines theoretical foundations with hands-on security labs, development, and real-world vulnerability testing.',
        highlights: [
            'Essentials of Cyber Security',
            'Network Protocols & Configuration',
            'Data Structures & Algorithms',
            'Full-Stack Development',
            'Security & Validation of Software',
            'Database Management Systems',
            'Financial & Risk Understanding in Tech',
        ],
    },
];
