import React from "react";
import TextReveal from "../UI/TextReveal";
import Button from "../UI/Button";
import  footerData  from "../../data/footer";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <BrandSection />
          <NavigationSection links={footerData.navigationLinks} />
          <SocialSection links={footerData.socialLinks} />
          <NewsletterSection />
        </div>

        <Copyright />
      </div>
    </footer>
  );
};

const BrandSection = () => (
  <div className="space-y-4">
    <TextReveal>
      <div className="text-2xl font-bold text-white">MAE</div>
    </TextReveal>
    <p className="text-sm text-gray-400">
      Creating digital experiences that make a difference.
    </p>
  </div>
);

const NavigationSection = ({ links }) => (
  <div>
    <h3 className="text-white font-medium mb-4">Navigation</h3>
    <div className="space-y-2">
      {links.map((item) => (
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
);

const SocialSection = ({ links }) => (
  <div>
    <h3 className="text-white font-medium mb-4">Social</h3>
    <div className="space-y-2">
      {links.map(({ label, link }) => (
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
);

const NewsletterSection = () => (
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
);

const Copyright = () => (
  <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900">
    <div className="text-sm text-gray-600">
      © {new Date().getFullYear()} All rights reserved
    </div>
    <div className="text-sm text-gray-600">
      Designed & Built by Mohiuddin Al Ehsan
    </div>
  </div>
);

export default Footer;
