import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

// JSON-LD structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dasun Navindu",
  "alternateName": "Dasun Navindu Dewnith",
  "url": "https://www.dasunnavindu.dev",
  "jobTitle": "Software Quality Assurance Engineer",
  "description": "Software Quality Assurance Engineer specializing in test automation and software quality.",
  "image": "https://www.dasunnavindu.dev/dp.png",
  "sameAs": [
    "https://github.com/Dasun169",
    "https://www.linkedin.com/in/dasun-navindu-987857292",
    "https://medium.com/@dasunnavindu2001",
    // Add your other social media URLs here
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "iLabs", // Update with your current company
    "url": "https://www.ilabs.lk/" // Update if applicable
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kiribathgoda",
    "addressRegion": "Western Province",
    "addressCountry": "Sri Lanka"
  },
  "knowsAbout": [
    "Software Testing",
    "Test Automation",
    "Quality Assurance",
    "Web Development",
    "Manual Testing",
    "Performance Testing",
    "Playwright",
    "Selenium",
    "API Testing",
    "CI/CD",
    "Jenkins",
    "GitHub Actions",
    "Postman",
    "Newman",
    "JMeter",
    "LoadRunner",
    "JIRA",
    "TestRail",
    "Allure Reports",
    "Logger",
    "POM",
    "CI/CD"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "University of Kelaniya",
    "url": "https://www.kln.ac.lk/"
  },
  "hasOccupation": {
    "@type": "Occupation",
    "name": "QA Engineer",
    "occupationLocation": {
      "@type": "City",
      "name": "Kiribathgoda, Sri Lanka"
    }
  }
};

export default function Home() {
  return (
    <>
      {/* JSON-LD structured data - helps Google understand who you are */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="relative min-h-screen transition-colors duration-300">
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  );
}