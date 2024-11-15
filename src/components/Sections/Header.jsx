import React from "react";
import { Clock, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "../UI/TextReveal";
import MagneticButton from "../UI/MagneticButton";

const Header = ({
  scrolled,
  activeSection,
  currentTime,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <>
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
          scrolled ? "bg-gray-900/70 backdrop-blur-md" : ""
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <TextReveal>
            <div className="text-sm tracking-[4px] text-white">
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
    </>
  );
};

export default Header;
