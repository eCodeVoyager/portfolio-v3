import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "../components/Sections/Header";
import HeroSection from "../components/Sections/HeroSection";
import ProjectsSection from "../components/Sections/ProjectsSection";
import WorkProcessSection from "../components/Sections/WorkProcessSection";
import ContactSection from "../components/Sections/ContactSection";
import Footer from "../components/Sections/Footer";
import CustomCursor from "../components/Ui/CustomCursor";
import ShineText from "../components/Ui/ShineText";
import projects from "../data/projects";
import TechStackSection from "../components/Sections/TechStackSection";

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Time update effect
  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "Africa/Lagos",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      });
      setCurrentTime(time);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "works", "process", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return (
      <motion.div
        className="fixed inset-0 bg-[#0e1111] flex items-center justify-center z-50"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ShineText />
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e1111] text-gray-400">
     
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-purple-300 origin-[0%] z-50"
        style={{ scaleX }}
      />

      <Header
        scrolled={scrolled}
        activeSection={activeSection}
        currentTime={currentTime}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <HeroSection />

      <TechStackSection />

      <ProjectsSection projects={projects} />

      <WorkProcessSection />
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Portfolio;
