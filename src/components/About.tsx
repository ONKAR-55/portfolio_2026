import AnimatedCard from '@/components/AnimatedCard';

export default function About() {
    return (
        <section className="py-15 px-6 w-full max-w-[90%] mx-auto mb-20 h-[80vh]">
            <h2 className="text-5xl md:text-6xl text-right mt-0 mb-12 dark:text-gray-200">
                About <span className="text-accent">Me</span>
            </h2>
            <AnimatedCard className="h-fit" isStatick={true}>
                <div className="p-12 min-h-[300px] flex flex-col bg-black/80 rounded-2xl text-left">
                    <p className="text-gray-100 font-medium text-lg">
                        I’m a B.Tech student with specialization in Cyber Security focused on understanding how systems break — and how to build them stronger. My journey started with web development, where i have build multiple projects and also i have experience in vulnerability assessment and secure software development. <br />
                        I actively work on amazing projects, custom CTF challenges, and vulnerability assessment labs. I have experience with tools like Burp Suite, SQLMap, Nmap and studied common attack vectors across modern web applications. <br />
                        With a foundation in Python, JavaScript, backend development, and networking, I aim to specialize in threat and vulnerability assessment and AI-driven automation. <br />
                        Currently, I’m focused on building real security solutions, sharpening my offensive and defensive skills, and preparing to contribute to high-impact security and software teams in the future.
                    </p>
                    <h2 className="text-sm font-bold text-accent mt-3">Ready for internships & freelance services</h2>
                </div>
            </AnimatedCard>
        </section>
    );
}
