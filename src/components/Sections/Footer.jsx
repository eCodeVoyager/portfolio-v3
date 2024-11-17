import React from "react";
import { Send, ArrowUpRight, ChevronRight } from "lucide-react";
import TextReveal from "../ui/TextReveal";
import { motion } from "framer-motion";

const FooterSection = ({ title, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="space-y-4"
  >
    <h3 className="text-white font-medium mb-6 relative inline-block">
      {title}
      <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
    </h3>
    {children}
  </motion.div>
);

const FooterLink = ({ href, children, external = false }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors"
  >
    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
    {children}
    {external && (
      <ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    )}
  </a>
);

const NewsletterForm = () => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
    <form className="relative flex gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700/50 rounded-lg 
                   backdrop-blur-sm focus:outline-none focus:border-purple-500/50 
                   focus:ring-2 focus:ring-purple-500/20 transition-all
                   text-white placeholder-gray-500"
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500
                   text-white rounded-lg flex items-center gap-2 
                   hover:from-purple-600 hover:to-blue-600 transition-all"
      >
        <Send className="w-4 h-4" />
      </motion.button>
    </form>
  </div>
);

const Footer = () => {
  const navigationLinks = ["Home", "About", "Projects", "Skills", "Contact"];

  const socialLinks = [
    { label: "GitHub", link: "https://github.com" },
    { label: "Twitter", link: "https://twitter.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "Instagram", link: "https://instagram.com" },
  ];

  return (
    <footer className="relative py-24 px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <TextReveal>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                MAE
              </div>
            </TextReveal>
            <p className="text-gray-400 leading-relaxed">
              Creating digital experiences that make a difference. Focused on
              building innovative solutions that inspire and deliver value.
            </p>
          </motion.div>

          {/* Navigation Section */}
          <FooterSection title="Navigation" delay={0.1}>
            <div className="space-y-3">
              {navigationLinks.map((item) => (
                <FooterLink key={item} href={`#${item.toLowerCase()}`}>
                  {item}
                </FooterLink>
              ))}
            </div>
          </FooterSection>

          {/* Social Section */}
          <FooterSection title="Connect" delay={0.2}>
            <div className="space-y-3">
              {socialLinks.map(({ label, link }) => (
                <FooterLink key={label} href={link} external>
                  {label}
                </FooterLink>
              ))}
            </div>
          </FooterSection>

          {/* Newsletter Section */}
          <FooterSection title="Stay Updated" delay={0.3}>
            <p className="text-sm text-gray-400 mb-6">
              Subscribe to my newsletter for the latest updates, insights, and
              creative discoveries.
            </p>
            <NewsletterForm />
          </FooterSection>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-500 hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Designed & Built by{" "}
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Mohiuddin Al Ehsan
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
