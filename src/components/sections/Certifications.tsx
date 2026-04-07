"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink, Calendar } from "lucide-react";

const CERTS = [
    {
        title: "Mabl Certification",
        issuer: "Mabl",
        date: "March 2026",
        domain: "QA Automation",
        color: "from-brand-500 to-cyan-500",
        verify: "#",
    },
    {
        title: "Introduction to Selenium",
        issuer: "Simplilearn",
        date: "June 2025",
        domain: "Automation",
        color: "from-accent-500 to-pink-500",
        verify: "#",
    },
    {
        title: "Introduction to JMeter",
        issuer: "Simplilearn",
        date: "January 2026",
        domain: "Performance Testing",
        color: "from-cyan-500 to-teal-500",
        verify: "#",
    },
    {
        title: "Jenkins Level I",
        issuer: "KodeKloud",
        date: "2025",
        domain: "DevOps / CI-CD",
        color: "from-orange-500 to-red-500",
        verify: "#",
    },
];

export default function Certifications() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="certifications" className="relative py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className=" text-brand-400 text-sm tracking-widest uppercase">
                        Credentials
                    </span>
                    <h2 className=" font-bold text-3xl sm:text-4xl mt-2 text-slate-100">
                        Certifications
                    </h2>
                </div>

                <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {CERTS.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
                        >
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} p-0.5 mb-4`}>
                                <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                                    <Award className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            <div className="flex-1">
                                <span className={`text-xs  px-2 py-0.5 rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                                    {cert.domain}
                                </span>
                                <h3 className=" font-semibold text-slate-100 mt-3 mb-1">
                                    {cert.title}
                                </h3>
                                <p className="text-slate-500 text-sm">{cert.issuer}</p>
                                <p className="flex items-center gap-1 text-xs text-slate-600 mt-1">
                                    <Calendar className="w-3 h-3" /> {cert.date}
                                </p>
                            </div>
                            <a
                            href={cert.verify}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center justify-center gap-2 px-4 py-2 glass border border-white/10 hover:border-brand-400/50 text-slate-400 hover:text-brand-400 text-sm rounded-xl transition-all"
              >
                            <ExternalLink className="w-3.5 h-3.5" /> Verify
                        </a>
            </motion.div>
          ))}
            </div>
        </div>
    </section >
  );
}