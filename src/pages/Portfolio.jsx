import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValue,
} from "framer-motion";
import {
  ArrowDown,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Menu,
  X,
  Clock,
  Download,
  Star,
  Code,
  Briefcase,
  Phone,
} from "lucide-react";
import Card from "../components/Card";
import Button from "../components/Button";
import CustomCursor from "../components/CustomCursor";
import MagneticButton from "../components/MagneticButton";
import TextReveal from "../components/TextReveal";
import WorkProcess from "../components/WorkProcess";
import projects from "../data/projects";
import ShineText from "../components/ShineText";

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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
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

  // Loading screen
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
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-[0%] z-50"
        style={{ scaleX }}
      />

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 bg-[#0e1111] z-50 p-6"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="h-full flex flex-col justify-center items-center gap-8">
              {["HOME", "WORKS", "PROCESS", "CONTACT"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl font-bold text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-[#0e1111]/80 backdrop-blur-md" : ""
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <TextReveal>
            <div className="text-sm tracking-[4px] text-white 	">
              MOHIUDDIN
              <br />
              AL EHSAN
            </div>
          </TextReveal>

          <nav className="hidden md:flex items-center gap-8">
            {["HOME", "WORKS", "PROCESS", "CONTACT"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm ${
                  activeSection === item.toLowerCase()
                    ? "text-white"
                    : "text-gray-400"
                }`}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{currentTime}</span>
            </div>
            <MagneticButton className="hidden md:block px-6 py-2 border border-gray-800 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300">
              RESUME
            </MagneticButton>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-32 px-6 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Enhanced background animations */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20 * (i + 1), 0],
                x: [0, 10 * (i + 1), 0],
                rotate: [0, 5 * (i + 1), 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className={`absolute w-${32 + i * 16} h-${
                32 + i * 16
              } bg-gradient-to-r from-purple-500/${10 + i * 5} to-blue-500/${
                10 + i * 5
              } rounded-full blur-xl`}
              style={{
                top: `${25 + i * 20}%`,
                left: `${25 + i * 20}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-[8vw] md:text-[12vw] font-bold leading-none text-white opacity-90 select-none">
              FULL
              <br />
              <motion.span
                animate={{
                  width: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="inline-block h-8 bg-white mx-8"
              />
              STACK
              <br />
              DEVELOPER
            </h1>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/2 right-0 max-w-xs"
            >
              <Card className="p-6 bg-gray-900/30 border-gray-800/50">
                <TextReveal>
                  <p className="text-sm leading-relaxed mb-4">
                    I am a developer based in Lagos, Nigeria focused on creating
                    interactive digital experiences on the web, working with
                    brands and industry leaders.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "TypeScript"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-800 rounded-full"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </TextReveal>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-sm">Scroll down</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="works" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl font-bold text-white">Selected Works</h2>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span className="text-sm">Featured Projects</span>
              </div>
            </div>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <Card className="p-6 bg-gray-900/30 border-gray-800/50 hover:border-gray-700 transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="aspect-video bg-gray-800 mb-6 overflow-hidden rounded-lg relative">
                    <motion.div
                      className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="outline" className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </Button>
                    </div>
                  </div>

                  <h3 className="text-2xl font-medium mb-4 text-white">
                    {project.title}
                  </h3>

                  <div className="space-y-4">
                    <p className="text-sm text-gray-400">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-gray-800 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <span className="text-sm">{project.year}</span>
                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          className="text-gray-400 hover:text-white"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.1 }}
                          className="text-gray-400 hover:text-white"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section id="process" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl font-bold text-white">Work Process</h2>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span className="text-sm">How I Work</span>
              </div>
            </div>
          </TextReveal>
          <WorkProcess />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <Card className="p-12 bg-gray-900/30 border-gray-800/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <TextReveal>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Let's Work Together
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Got a project in mind? Let's create something extraordinary
                    together. I'm always open to discussing new projects and
                    creative ideas.
                  </p>
                </TextReveal>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Email</h3>
                      <a
                        href="mailto:hello@mohiuddin.dev"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        hello@mohiuddin.dev
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Phone</h3>
                      <a
                        href="tel:+2348012345678"
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        +234 801 234 5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Timezone</h3>
                      <p className="text-sm text-gray-400">
                        Lagos, Nigeria (GMT+1)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-white font-medium mb-4">Social Links</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, link: "https://github.com" },
                      { icon: Twitter, link: "https://twitter.com" },
                      { icon: Linkedin, link: "https://linkedin.com" },
                      { icon: Mail, link: "mailto:hello@mohiuddin.dev" },
                    ].map(({ icon: Icon, link }, index) => (
                      <motion.a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-300"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Card className="p-6 bg-gray-800/50 border-gray-700/50">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                        placeholder="Project discussion"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400">Message</label>
                      <textarea
                        className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors h-32 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <Button className="w-full bg-white text-black hover:bg-gray-200 transition-colors py-6 rounded-lg">
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <TextReveal>
                <div className="text-2xl font-bold text-white">MAE</div>
              </TextReveal>
              <p className="text-sm text-gray-400">
                Creating digital experiences that make a difference.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Navigation</h3>
              <div className="space-y-2">
                {["Home", "Works", "Process", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Social</h3>
              <div className="space-y-2">
                {[
                  { label: "Github", link: "https://github.com" },
                  { label: "Twitter", link: "https://twitter.com" },
                  { label: "LinkedIn", link: "https://linkedin.com" },
                  { label: "Email", link: "mailto:hello@mohiuddin.dev" },
                ].map(({ label, link }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to my newsletter for updates and insights.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-sm"
                />
                <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} All rights reserved
            </div>
            <div className="text-sm text-gray-600">
              Designed & Built by Mohiuddin Al Ehsan
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
