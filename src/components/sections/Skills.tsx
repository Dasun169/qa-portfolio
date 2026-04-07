"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SKILL_GROUPS = [
    {
        category: "Testing",
        color: "from-blue-500 to-cyan-500",
        skills: ["Manual Testing", "Regression Testing", "Smoke & Sanity Testing", "Test Case Design", "Defect Management"],
    },
    {
        category: "Automation",
        color: "from-purple-500 to-pink-500",
        skills: ["Playwright", "Selenium WebDriver"],
    },
    {
        category: "API Testing",
        color: "from-cyan-500 to-teal-500",
        skills: ["Postman", "Newman", "REST Assured"],
    },
    {
        category: "Performance",
        color: "from-orange-500 to-red-500",
        skills: ["JMeter", "K6"],
    },
    {
        category: "Tools & DevOps",
        color: "from-green-500 to-emerald-500",
        skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Jenkins", "Docker", "AWS", "Azure", "GCP"],
    },
    {
        category: "Programming",
        color: "from-brand-500 to-accent-500",
        skills: ["Java", "JavaScript", "TypeScript", "Python", "Groovy"],
    },
    {
        category: "Database",
        color: "from-yellow-500 to-orange-500",
        skills: ["MySQL", "Oracle", "MongoDB"],
    },
];

export default function Skills() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="skills" className="relative py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className=" text-brand-400 text-sm tracking-widest uppercase">
                        Skills
                    </span>
                    <h2 className="font-bold text-3xl sm:text-4xl mt-2 text-slate-100">
                        Technical Arsenal
                    </h2>
                </div>

                <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SKILL_GROUPS.map((group, gi) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: gi * 0.08 }}
                            whileHover={{ y: -4 }}
                            className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${group.color}`} />
                                <h3 className="font-semibold text-slate-100">
                                    {group.category}
                                </h3>
                            </div>
                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-3 py-1 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-300 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}