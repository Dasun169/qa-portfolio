"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, School, MapPin, Calendar, Users } from "lucide-react";

const TIMELINE = [
    {
        "type": "school",
        "icon": "School",
        "color": "text-pink-400",
        "border": "border-pink-500/40",
        "bg": "bg-pink-500/10",
        "title": "Associate QA Automation Engineer",
        "org": "Mitra Innovation (Pvt) Ltd",
        "period": "May 2026 - Present",
        "location": "Moratuwa, Sri Lanka",
        "logo": "https://media.licdn.com/dms/image/v2/D560BAQG9dMLZzK4vUA/company-logo_200_200/company-logo_200_200/0/1729666725636/mitra_innovation_logo?e=1783555200&v=beta&t=tUN_EqXBC88EpK8H3a-q0cSzlxGdblue1-VNTDp_AWg",
        "points": [
            "Led end-to-end regression testing for a fintech banking web application using a Selenium-based automation framework, ensuring system stability across releases",
            "Managed the complete bug lifecycle during regression cycles — identified, documented, prioritized, and assigned critical issues to respective developers for timely resolution",
            "Designed and executed automated test scripts for the mobile application using Katalon Studio's low-code framework, expanding test coverage to the mobile banking platform"
        ]
    },
    {
        type: "work",
        icon: Briefcase,
        color: "text-brand-400",
        border: "border-brand-500/40",
        bg: "bg-brand-500/10",
        title: "QA Automation Intern",
        org: "iLabs (Pvt) Ltd",
        period: "Aug 2025 – May 2026",
        location: "Koswatte, Sri Lanka",
        logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHJiJ7YlJFsYg/company-logo_200_200/company-logo_200_200/0/1630639335270/incubate_labs_logo?e=1783555200&v=beta&t=HEsL4FRwd13QiKweXlURMgwech4WusoNqlcLWy1aZok",
        points: [
            "Worked on the Cloud of Goods rental website and was responsible for maintaining its quality",
            "Automated E2E tests using Playwright and reduced manual testing effort by 30–40%",
            "Created and managed 400+ test cases across functional and regression suites",
            "Integrated automation pipelines into CI/CD workflows using Jenkins",
        ],
    },
    {
        type: "edu",
        icon: GraduationCap,
        color: "text-accent-400",
        border: "border-accent-500/40",
        bg: "bg-accent-500/10",
        title: "BSc (Hons) in Computer Science",
        org: "University of Kelaniya",
        period: "2022 – 2026",
        location: "Kelaniya, Sri Lanka",
        logo: "https://media.licdn.com/dms/image/v2/C560BAQGTFCXTiB6wqA/company-logo_200_200/company-logo_200_200/0/1631312041455?e=1783555200&v=beta&t=uiDf_Ob9lUJc1dXHevH3TQYaL_bmu8QUK1_aeFRwgFw",
        points: [
            "Specializing in Computer Science and have foundamental about software engineering, quality assurance, data science, AI and etc",
            "Active member of tech communities",
        ],
    },
    {
        type: "volunteer",
        icon: Users, // from lucide-react: import { Users } from "lucide-react"
        color: "text-cyan-400",
        border: "border-cyan-500/40",
        bg: "bg-cyan-500/10",
        title: "President",
        org: "Statistic & Computer Science Students’ Association",
        period: "Aug 2024 – Jun 2025",
        location: "University of Kelaniya, Sri Lanka",
        logo: "https://media.licdn.com/dms/image/v2/D4E0BAQH6t6nkcuCtNw/img-crop_100/B4EZbx4WBTGQAU-/0/1747814803765?e=1783555200&v=beta&t=ePOKoRF3tIPfclCcqe4D15BhGb4hevqmZB78_UgN3Dg",
        points: [
            "Organized academic programs such as PyQuest (Python workflow) and StatBee (Statistic Quiz Competition)",
            "Coordinated fun events including Annual Field Visit, Aurudu Uthsawaya, Movie Festival, and Food Festival",
        ],
    },
    {
        type: "school",
        icon: School,
        color: "text-pink-400",
        border: "border-pink-500/40",
        bg: "bg-pink-500/10",
        title: "Secondary Education",
        org: "Bandaranayake College Gampaha",
        period: "Until 2021",
        location: "Gampaha, Sri Lanka",
        logo: "https://media.licdn.com/dms/image/v2/C4E0BAQE8vLcYFZIDHQ/company-logo_200_200/company-logo_200_200/0/1630593421368?e=1783555200&v=beta&t=gQHCvf9OeI0OQdiL4Rvz1m91G0wDHYvZg0iWN3LvMVE",
        points: [
            "G.C.E. Advanced Level — Mathematics (B), Chemistry (B), Physics (C)",
            "G.C.E. Ordinary Level — 7A, 2B"
        ],
    },
];

export default function Experience() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="experience" className="relative py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className=" text-brand-400 text-sm tracking-widest uppercase">
                        Journey
                    </span>
                    <h2 className=" font-bold text-3xl sm:text-4xl mt-2 text-slate-100">
                        Experience & Education
                    </h2>
                </div>

                <div ref={ref} className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-accent-500/50 to-cyan-500/50" />

                    <div className="space-y-8">
                        {TIMELINE.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: -40 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: i * 0.2 }}
                                    className="relative pl-16 sm:pl-20"
                                >
                                    {/* Icon / Logo */}
                                    <div className={`absolute left-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl glass border ${item.border} ${item.bg} overflow-hidden`}>
                                        {item.logo ? (
                                            <img
                                                src={item.logo}
                                                alt={item.org}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
                                        )}
                                    </div>

                                    {/* Card */}
                                    <div className={`glass rounded-2xl p-6 border ${item.border} hover:shadow-lg transition-all duration-300`}>
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                            <div>
                                                <h3 className=" font-bold text-slate-100">{item.title}</h3>
                                                <p className={`font-semibold text-sm ${item.color}`}>{item.org}</p>
                                            </div>
                                            <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                                                <span className="flex items-center gap-1 text-xs text-slate-500 ">
                                                    <Calendar className="w-3 h-3" /> {item.period}
                                                </span>
                                                <span className="flex items-center gap-1 text-xs text-slate-500">
                                                    <MapPin className="w-3 h-3" /> {item.location}
                                                </span>
                                            </div>
                                        </div>
                                        <ul className="space-y-1.5">
                                            {item.points.map((pt) => (
                                                <li key={pt} className="flex items-start gap-2 text-slate-400 text-sm">
                                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${item.bg} border ${item.border} shrink-0`} />
                                                    {pt}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}