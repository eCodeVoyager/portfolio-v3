import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Card from "../Ui/Card";
import TextReveal from "../Ui/TextReveal";
import ScrollIndicator from "../Ui/ScrollIndicator";
import Background from "../Ui/Background";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      <Background />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center">
        <div className="relative pt-20 lg:pt-0">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none text-white opacity-90 select-none tracking-tighter">
              <span className="block">FULL</span>
              <div className="flex items-center my-2 sm:my-4">
                <motion.span
                  animate={{
                    width: ["0%", "20%", "0%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="inline-block h-2 sm:h-3 md:h-4 bg-white mx-4 sm:mx-6"
                />
                <span>STACK</span>
              </div>
              <span className="block">DEVELOPER</span>
            </h1>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:absolute lg:top-1/2 lg:-right-4 xl:right-0 lg:-translate-y-1/2 mt-8 lg:mt-0 lg:max-w-xs w-full"
            >
              <Card className="p-6 bg-gray-900/30 border-gray-800/50 backdrop-blur-sm">
                <TextReveal>
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    I am a developer based in Lagos, Nigeria focused on creating
                    interactive digital experiences on the web, working with
                    brands and industry leaders.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Node.js", "TypeScript"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs sm:text-sm bg-gray-800/50 rounded-full hover:bg-gray-800/70 transition-colors"
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
        </div>

        {/* Scroll Down Indicator */}
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default HeroSection;
