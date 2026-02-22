export type CTFChallenge = {
    name: string;
    description: string;
    link: string;
    tags: string[];
};

export const ctfChallenges: CTFChallenge[] = [
    {
        name: "Response The Flag",
        description: "A web-based CTF challenge focused on analyzing HTTP responses to uncover hidden flags. Inspect headers, status codes, and response bodies to crack the puzzle.",
        link: "https://response-the-flag.onrender.com",
        tags: ["Web", "HTTP", "Reconnaissance"],
    },
    {
        name: "FutureVision: The Hidden Key",
        description: "A mystery-themed CTF where players must navigate through encoded clues and hidden elements to reveal the secret key. Think outside the box.",
        link: "https://the-hidden-destiny.onrender.com",
        tags: ["OSINT", "Encoding", "Web"],
    },
    {
        name: "Find The Script",
        description: "Dive deep into JavaScript and source files to locate a hidden script. A challenge designed to test your understanding of client-side code inspection.",
        link: "https://find-the-script.onrender.com",
        tags: ["JavaScript", "Source Code", "Web"],
    },
    {
        name: "Find The Key",
        description: "Track down a concealed key buried within the application's structure. A challenge that tests your ability to discover secrets across multiple vectors.",
        link: "https://find-the-key-kih6.onrender.com",
        tags: ["Web", "Discovery", "Enumeration"],
    },
];
