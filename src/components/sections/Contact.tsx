"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/icons";

export default function Contact() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try {
            await emailjs.send(
                "service_dj541h9",       // Replace with your EmailJS service ID
                "template_b1758q4",      // Replace with your EmailJS template ID
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject,
                    message: form.message,
                    to_email: "dasunnavindu2001@gmail.com",
                },
                "SYsvri_9l0P4KjRwh"        // Replace with your EmailJS public key
            );
            setStatus("sent");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    const CONTACT_INFO = [
        { icon: Mail, label: "Email", value: "dasunnavindu2001@gmail.com", href: "mailto:dasunnavindu2001@gmail.com" },
        { icon: Phone, label: "Phone", value: "+94 71 627 6932", href: "tel:+94716276932" },
        { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dasunnavindu", href: "https://linkedin.com/in/dasunnavindu" },
        { icon: Github, label: "GitHub", value: "github.com/dasunnavindu", href: "https://github.com/dasunnavindu" },
    ];

    return (
        <section id="contact" className="relative py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className=" text-brand-400 text-sm tracking-widest uppercase">
                        Contact
                    </span>
                    <h2 className=" font-bold text-3xl sm:text-4xl mt-2 text-slate-100">
                        Get In Touch
                    </h2>
                </div>

                <div ref={ref} className="grid lg:grid-cols-2 gap-12">
                    {/* Contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <p className="text-slate-400 text-lg leading-relaxed">
                            I&apos;m always open to discussing new opportunities, QA automation challenges,
                            or just having a conversation about testing. Reach out!
                        </p>
                        <div className="space-y-4">
                            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={label !== "Email" && label !== "Phone" ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-4 p-4 glass rounded-xl border border-white/10 hover:border-brand-500/30 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                                        <Icon className="w-4 h-4 text-brand-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 ">{label}</p>
                                        <p className="text-slate-300 text-sm group-hover:text-brand-400 transition-colors">{value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        {status === "sent" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center glass rounded-2xl border border-green-500/30 p-12 text-center"
                            >
                                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                                <h3 className=" font-bold text-xl text-slate-100 mb-2">Message Sent!</h3>
                                <p className="text-slate-400">I&apos;ll get back to you soon.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 px-6 py-2 glass rounded-xl border border-white/10 text-slate-400 hover:text-brand-400 text-sm transition-colors"
                                >
                                    Send another
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {[
                                    { name: "name", placeholder: "Your Name", type: "text" },
                                    { name: "email", placeholder: "Your Email", type: "email" },
                                    { name: "subject", placeholder: "Subject", type: "text" },
                                ].map((field) => (
                                    <input
                                        key={field.name}
                                        type={field.type}
                                        name={field.name}
                                        value={form[field.name as keyof typeof form]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        required
                                        className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-brand-500/50 outline-none text-slate-100 placeholder-slate-600 text-sm transition-colors bg-transparent"
                                    />
                                ))}
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-brand-500/50 outline-none text-slate-100 placeholder-slate-600 text-sm transition-colors bg-transparent resize-none"
                                />
                                <motion.button
                                    type="submit"
                                    disabled={status === "sending"}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
                                >
                                    <Send className="w-4 h-4" />
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </motion.button>
                                {status === "error" && (
                                    <p className="text-red-400 text-sm text-center">
                                        Something went wrong. Please try again or email directly.
                                    </p>
                                )}
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}