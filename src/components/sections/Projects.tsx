"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Play } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";

const PROJECTS = [
  {
    title: "Playwright Agent Demo",
    subtitle: "AI-based Test Automation Framework",
    year: "2026",
    description: "An AI-powered test automation framework leveraging Playwright with intelligent agent-based test generation and execution capabilities.",
    tech: ["Playwright", "TypeScript", "VS Code", "MCP Server", "AI Agents", "Planner", "Generator", "Healer"],
    github: "https://github.com/Dasun169/playwright-agents-demo.git",
    linkedin: "https://www.linkedin.com/posts/dasun-navindu-987857292_testautomation-playwright-ai-activity-7437815895193944064-L2jy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEb2CbcBNBM25m8IGdkMoIfZj_OeRz--geQ",
    demo: null,
    color: "from-brand-500/20 to-accent-500/20",
    border: "border-brand-500/30",
  },
  {
    title: "Playwright Test Framework",
    subtitle: "SauceDemo E2E Automation",
    year: "2026",
    description: "Comprehensive end-to-end test automation framework for SauceDemo using Playwright with Page Object Model and parallel execution.",
    tech: ["Playwright", "TypeScript", "Allure Reports", "Logger", "POM", "CI/CD"],
    github: "https://github.com/Dasun169/playwright-demo-CI.git",
    linkedin: "https://www.linkedin.com/posts/dasun-navindu-987857292_qa-automationtesting-playwright-activity-7442487018535915520-2F_z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEb2CbcBNBM25m8IGdkMoIfZj_OeRz--geQ",
    demo: null,
    color: "from-cyan-500/20 to-brand-500/20",
    border: "border-cyan-500/30",
  },
  {
    title: "Selenium Test Framework",
    subtitle: "Java + TestNG Automation",
    year: "2025",
    description: "Robust Selenium-based automation framework using Java, TestNG, and Maven with cross-browser testing support and detailed reporting.",
    tech: ["Selenium", "Java", "TestNG", "Maven", "WebDriver Manager"],
    github: "https://github.com/Dasun169/selenium-tutorial-basic.git",
    demo: null,
    color: "from-accent-500/20 to-pink-500/20",
    border: "border-accent-500/30",
  },
  {
    title: "DummyJSON API CI/CD Pipeline",
    subtitle: "API Testing with Jenkins",
    year: "2026",
    description: "Automated API testing pipeline for DummyJSON using Postman, Newman, and Jenkins with GitHub Actions integration.",
    tech: ["Postman", "Newman", "Jenkins", "GitHub Actions", "Env files", "Collection files"],
    github: "https://github.com/Dasun169/dummyjson-api-testing.git",
    demo: null,
    color: "from-green-500/20 to-cyan-500/20",
    border: "border-green-500/30",
  },
  {
    title: "LERNIFY – E-Learning System",
    subtitle: "Full-Stack Role-Based LMS",
    year: "2025",
    description: "A role-based full-stack web application where admins manage courses, lecturers, students, and system logs. Lecturers manage course content while students access materials and view results.",
    tech: ["React", "Vite", "JavaScript", "Spring Boot", "MongoDB", "AWS S3"],
    github: "https://github.com/Dasun169/E-Learning-Management-System.git",
    linkedin: "https://www.linkedin.com/posts/dasun-navindu-987857292_fullstackdevelopment-lms-react-activity-7306698686946820096-iQiq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEb2CbcBNBM25m8IGdkMoIfZj_OeRz--geQ",
    demo: null,
    color: "from-indigo-500/20 to-purple-500/20",
    border: "border-indigo-500/30",
  },
  {
    title: "QUILL – Note Management",
    subtitle: "MERN Stack Application",
    year: "2025",
    description: "A secure MERN-based note management platform with JWT authentication, allowing users to create, update, delete, categorize notes, and manage personalized profiles.",
    tech: ["React", "Vite", "TypeScript", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
    github: "https://github.com/Dasun169/Quill-Note-Management-System.git",
    linkedin: "https://www.linkedin.com/posts/dasun-navindu-987857292_mernstack-reactjs-nodejs-activity-7325128931391496192-FqtJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEb2CbcBNBM25m8IGdkMoIfZj_OeRz--geQ",
    demo: null,
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/30",
  },
  {
    title: "Starlight Cinema",
    subtitle: "Movie Ticket Booking System",
    year: "2024",
    description: "A full-stack movie ticket booking system where users can browse movies, book tickets, and make payments, providing hands-on experience in frontend-backend integration.",
    tech: ["HTML", "CSS", "JavaScript", "Spring Boot", "MySQL"],
    github: "https://github.com/Dasun169/Film-Theatre.git",
    linkedin: "https://www.linkedin.com/posts/dasun-navindu-987857292_film-theatre-online-booking-system-activity-7266436152897744896-iIdc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEb2CbcBNBM25m8IGdkMoIfZj_OeRz--geQ",
    demo: null,
    color: "from-yellow-500/20 to-orange-500/20",
    border: "border-yellow-500/30",
  },
  {
    title: "Netflix Clone",
    subtitle: "Full-Stack Streaming App (Group)",
    year: "2024",
    description: "A Netflix-inspired streaming platform replicating core features such as authentication, video streaming, and profile management using React frontend and Spring Boot APIs.",
    tech: ["React", "Spring Boot", "Bootstrap", "MySQL"],
    github: "https://github.com/OshithRoshantha/netflix-clone",
    demo: null,
    color: "from-red-500/20 to-pink-500/20",
    border: "border-red-500/30",
  },
  {
    title: "ECAL – Billing System",
    subtitle: "Desktop Billing Automation Tool",
    year: "2024",
    description: "A C# .NET desktop application for automated billing calculations and invoice tracking, integrated with SQL Server for data persistence.",
    tech: ["C#", ".NET Framework", "SQL Server"],
    github: "https://github.com/Dasun169/ECAL.git",
    linkedin: "https://www.linkedin.com/posts/dasun-navindu-987857292_csharp-windowsforms-appdevelopment-activity-7250904708444270592-WSAg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEb2CbcBNBM25m8IGdkMoIfZj_OeRz--geQ",
    demo: null,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
  },
  {
    title: "FITZONE – Gym Website",
    subtitle: "Dynamic Fitness Website",
    year: "2024",
    description: "A dynamic gym website featuring membership plans, subscription forms, and interactive UI components to enhance user engagement.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/Dasun169/gym-website.git",
    linkedin: "https://www.linkedin.com/posts/dasun-navindu-987857292_webdevelopment-firstproject-gymwebsite-activity-7229715359841337345-aiEF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEb2CbcBNBM25m8IGdkMoIfZj_OeRz--geQ",
    demo: null,
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/30",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className=" text-brand-400 text-sm tracking-widest uppercase">
            Projects
          </span>
          <h2 className=" font-bold text-3xl sm:text-4xl mt-2 text-slate-100">
            Featured Work
          </h2>
          <p className="text-slate-500 mt-2">10+ projects across QA automation and testing</p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-3 gap-6">
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
                    <span className=" text-xs text-slate-500">{project.year}</span>
                    <h3 className=" font-bold text-lg text-slate-100 mt-0.5 group-hover:gradient-text transition-all">
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
                    {'linkedin' in project && project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass rounded-lg border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
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
                      className="px-2 py-0.5 text-xs  bg-white/5 border border-white/10 rounded text-slate-300"
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