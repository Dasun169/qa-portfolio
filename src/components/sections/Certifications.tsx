"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink, Calendar } from "lucide-react";

const CERTS = [
    {
        title: "Mabl Certification: Foundations",
        issuer: "Mabl",
        date: "March 2026",
        domain: "QA Automation",
        color: "from-brand-500 to-cyan-500",
        verify: "https://verify.skilljar.com/c/dtks9e57ox56",
    },
    {
        title: "Introduction to Selenium",
        issuer: "Simplilearn",
        date: "June 2025",
        domain: "Automation",
        color: "from-accent-500 to-pink-500",
        verify: "https://www.linkedin.com/in/dasun-navindu-987857292/details/certifications/",
    },
    {
        title: "Introduction to JMeter",
        issuer: "Simplilearn",
        date: "January 2026",
        domain: "Performance Testing",
        color: "from-cyan-500 to-teal-500",
        verify: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0MjY1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTcyMjk1MF85OTk2NTI0XzE3Njg1Njk0NjQzMzQucG5nIiwidXNlcm5hbWUiOiJEYXN1biBOYXZpbmR1In0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true&_branch_match_id=1540704782468506787&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVNytNSnUq9XCKjEqyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAH9Oe0D8AAAA%3D",
    },
    {
        title: "Free DevOps Course",
        issuer: "CoDeKu DevOps Academy",
        date: "June 2025",
        domain: "DevOps",
        color: "from-orange-500 to-red-500",
        verify: "https://intellipaat.com/academy/certificate-link/?Yz0xNjU1JnU9MjUzMDM2JmV4dD0x",
    },
    {
        title: "KodeKloud Engineer - Linux (Level 1)",
        issuer: "KodeKloud",
        date: "September 2025",
        domain: "Linux",
        color: "from-blue-500 to-cyan-500",
        verify: "https://engineer.kodekloud.com/certificate-verification/4507966c-de7f-4314-b690-73e545897db4",
    },
    {
        title: "KodeKloud Engineer - Docker (Level 1)",
        issuer: "KodeKloud",
        date: "September 2025",
        domain: "Docker",
        color: "from-blue-500 to-cyan-500",
        verify: "https://engineer.kodekloud.com/certificate-verification/d3d695ff-413e-4bed-babc-67a340ddd425",
    },
    {
        title: "KodeKloud Engineer - Jenkins (Level 1)",
        issuer: "KodeKloud",
        date: "September 2025",
        domain: "DevOps / CI-CD",
        color: "from-orange-500 to-red-500",
        verify: "https://engineer.kodekloud.com/certificate-verification/6edbbbd1-7095-4219-94a3-4dda12ac1b26",
    },
    {
        title: "Docker for Absolute Beginners with Hands on Projects",
        issuer: "CoDeKu DevOps Academy",
        date: "July 2025",
        domain: "Docker",
        color: "from-blue-500 to-cyan-500",
        verify: "https://www.linkedin.com/in/dasun-navindu-987857292/details/certifications/",
    },
    {
        title: "AWS Cloud Quest: Cloud Practitioner",
        issuer: "AWS",
        date: "December 2025",
        domain: "Cloud Computing",
        color: "from-orange-500 to-yellow-500",
        verify: "https://www.credly.com/badges/f3677d73-3a3e-41eb-a80d-561eed4471f0/linked_in_profile",
    }
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