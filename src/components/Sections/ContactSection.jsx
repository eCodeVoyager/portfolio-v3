import React from "react";
import {
  Mail,
  Phone,
  Clock,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import TextReveal from "../Ui/TextReveal";

// Contact Info Item Component
const ContactInfoItem = ({ icon: Icon, title, content, link, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group relative"
  >
    <div className="flex items-center gap-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-12 h-12 rounded-xl bg-gray-800/80 flex items-center justify-center 
                   group-hover:bg-purple-500/20 transition-all duration-300 backdrop-blur-sm
                   border border-gray-700/50 group-hover:border-purple-500/50"
      >
        <Icon className="w-6 h-6 text-gray-400 group-hover:text-purple-300 transition-colors" />
      </motion.div>
      <div>
        <h3 className="text-white font-medium">{title}</h3>
        {link ? (
          <a
            href={link}
            className="text-sm text-gray-400 hover:text-purple-300 transition-colors 
                     inline-flex items-center gap-1 group/link"
          >
            {content}
            <ArrowRight
              className="w-4 h-4 opacity-0 group-hover/link:opacity-100 
                                transform translate-x-0 group-hover/link:translate-x-1 transition-all"
            />
          </a>
        ) : (
          <p className="text-sm text-gray-400">{content}</p>
        )}
      </div>
    </div>
  </motion.div>
);

// Social Link Component
const SocialLink = ({ icon: Icon, link, label, index }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.1 }}
    className="relative group"
  >
    <div
      className="w-12 h-12 rounded-xl bg-gray-800/80 flex items-center justify-center 
                    border border-gray-700/50 group-hover:border-purple-500/50
                    backdrop-blur-sm transition-all duration-300"
    >
      <Icon
        className="w-5 h-5 text-gray-400 group-hover:text-purple-300 
                     group-hover:scale-110 transition-all"
      />
    </div>
    <span
      className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs 
                     text-gray-400 opacity-0 group-hover:opacity-100 transition-all"
    >
      {label}
    </span>
  </motion.a>
);

// Form Input Component
const FormInput = ({ label, type, placeholder, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="space-y-2"
  >
    <label className="text-sm text-gray-400">{label}</label>
    <input
      type={type}
      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 
                 rounded-lg backdrop-blur-sm focus:outline-none focus:border-purple-500/50 
                 focus:ring-2 focus:ring-purple-500/20 transition-all
                 text-white placeholder-gray-500"
      placeholder={placeholder}
    />
  </motion.div>
);

// Contact Form Component
const ContactForm = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl" />
    <div className="relative p-8 backdrop-blur-xl rounded-xl border border-gray-800/50">
      <form className="space-y-6">
        {[
          { label: "Name", type: "text", placeholder: "Your name" },
          { label: "Email", type: "email", placeholder: "your@email.com" },
          { label: "Subject", type: "text", placeholder: "Project discussion" },
        ].map((input, index) => (
          <FormInput key={input.label} {...input} index={index} />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <label className="text-sm text-gray-400">Message</label>
          <textarea
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700/50 
                       rounded-lg backdrop-blur-sm focus:outline-none focus:border-purple-500/50 
                       focus:ring-2 focus:ring-purple-500/20 transition-all h-32 resize-none
                       text-white placeholder-gray-500"
            placeholder="Tell me about your project..."
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500
                     text-white rounded-lg flex items-center justify-center gap-2 
                     group hover:from-purple-600 hover:to-blue-600 transition-all"
        >
          <span>Send Message</span>
          <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </form>
    </div>
  </div>
);

// Main Contact Section Component
const ContactSection = () => {
  const socialLinks = [
    { icon: Github, link: "https://github.com", label: "GitHub" },
    { icon: Twitter, link: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, link: "mailto:hello@example.com", label: "Email" },
  ];

  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+234 801 234 5678",
      link: "tel:+2348012345678",
    },
    {
      icon: Clock,
      title: "Timezone",
      content: "Lagos, Nigeria (GMT+1)",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="p-8 md:p-12 bg-gray-900/30 border border-gray-800/50 backdrop-blur-xl rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <TextReveal>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let's Work Together
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Got a project in mind? Let's create something extraordinary
                  together. I'm always open to discussing new projects and
                  creative ideas.
                </p>
              </TextReveal>

              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <ContactInfoItem
                    key={detail.title}
                    {...detail}
                    index={index}
                  />
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-white font-medium mb-4">Social Links</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <SocialLink key={index} {...link} index={index} />
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
