"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Play } from "lucide-react";
import { Github } from "@/components/ui/icons";

const PROJECTS = [
    {
        title: "Playwright Agent Demo",
        subtitle: "AI-based Test Automation Framework",
        year: "2025",
        description: "An AI-powered test automation framework leveraging Playwright with intelligent agent-based test generation and execution capabilities.",
        tech: ["Playwright", "TypeScript", "AI", "Node.js"],
        github: "https://github.com/dasunnavindu",
        demo: null,
        color: "from-brand-500/20 to-accent-500/20",
        border: "border-brand-500/30",
    },
    {
        title: "Playwright Test Framework",
        subtitle: "SauceDemo E2E Automation",
        year: "2024",
        description: "Comprehensive end-to-end test automation framework for SauceDemo using Playwright with Page Object Model and parallel execution.",
        tech: ["Playwright", "TypeScript", "POM", "CI/CD"],
        github: "https://github.com/dasunnavindu",
        demo: null,
        color: "from-cyan-500/20 to-brand-500/20",
        border: "border-cyan-500/30",
    },
    {
        title: "Selenium Test Framework",
        subtitle: "Java + TestNG Automation",
        year: "2024",
        description: "Robust Selenium-based automation framework using Java, TestNG, and Maven with cross-browser testing support and detailed reporting.",
        tech: ["Selenium", "Java", "TestNG", "Maven"],
        github: "https://github.com/dasunnavindu",
        demo: null,
        color: "from-accent-500/20 to-pink-500/20",
        border: "border-accent-500/30",
    },
    {
        title: "DummyJSON API CI/CD Pipeline",
        subtitle: "API Testing with Jenkins",
        year: "2024",
        description: "Automated API testing pipeline for DummyJSON using Postman, Newman, and Jenkins with GitHub Actions integration.",
        tech: ["Postman", "Newman", "Jenkins", "GitHub Actions"],
        github: "https://github.com/dasunnavindu",
        demo: null,
        color: "from-green-500/20 to-cyan-500/20",
        border: "border-green-500/30",
    },
];

export default function Projects() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="projects" className="relative py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="font-mono text-brand-400 text-sm tracking-widest uppercase">
                        Projects
                    </span>
                    <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2 text-slate-100">
                        Featured Work
                    </h2>
                    <p className="text-slate-500 mt-2">7+ projects across QA automation and testing</p>
                </div>

                <div ref={ref} className="grid sm:grid-cols-2 gap-6">
                    {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className={`group relative glass rounded-2xl p-6 border ${project.border} hover:shadow-2xl transition-all duration-400`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl opacity-50`} />
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-xs text-slate-500">{project.year}</span>
                    <h3 className="font-display font-bold text-lg text-slate-100 mt-0.5 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-lg border border-white/10 text-slate-400 hover:text-brand-400 hover:border-brand-400/50 transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass rounded-lg border border-white/10 text-slate-400 hover:text-accent-400 hover:border-accent-400/50 transition-all"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-mono bg-white/5 border border-white/10 rounded text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div >
    </section >
  );
}