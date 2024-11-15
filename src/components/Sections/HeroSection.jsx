import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Card from "../UI/Card";
import TextReveal from "../UI/TextReveal";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-32 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background animations */}
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
                  {["React", "Next.js", "Node.js", "TypeScript"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
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
  );
};

export default HeroSection;
