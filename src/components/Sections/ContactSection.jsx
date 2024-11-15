import React from "react";
import { Mail, Phone, Clock, Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Card from "./Card";
import Button from "./Button";
import TextReveal from "./TextReveal";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, link: "https://github.com" },
    { icon: Twitter, link: "https://twitter.com" },
    { icon: Linkedin, link: "https://linkedin.com" },
    { icon: Mail, link: "mailto:hello@mohiuddin.dev" },
  ];

  return (
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

              <ContactInfo />
              <SocialLinks links={socialLinks} />
            </div>

            <ContactForm />
          </div>
        </Card>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@mohiuddin.dev",
      link: "mailto:hello@mohiuddin.dev",
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
    <div className="space-y-6">
      {contactDetails.map(({ icon: Icon, title, content, link }) => (
        <div key={title} className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-medium">{title}</h3>
            {link ? (
              <a
                href={link}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {content}
              </a>
            ) : (
              <p className="text-sm text-gray-400">{content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const SocialLinks = ({ links }) => {
  return (
    <div className="mt-12">
      <h3 className="text-white font-medium mb-4">Social Links</h3>
      <div className="flex gap-4">
        {links.map(({ icon: Icon, link }, index) => (
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
  );
};

const ContactForm = () => {
  return (
    <Card className="p-6 bg-gray-800/50 border-gray-700/50">
      <form className="space-y-6">
        {[
          { label: "Name", type: "text", placeholder: "Your name" },
          { label: "Email", type: "email", placeholder: "your@email.com" },
          { label: "Subject", type: "text", placeholder: "Project discussion" },
        ].map(({ label, type, placeholder }) => (
          <div key={label} className="space-y-2">
            <label className="text-sm text-gray-400">{label}</label>
            <input
              type={type}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
              placeholder={placeholder}
            />
          </div>
        ))}

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
  );
};

export default ContactSection;
