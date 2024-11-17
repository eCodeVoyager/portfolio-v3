import React, { useState } from "react";
import { Code } from "lucide-react";
import TextReveal from "../Ui/TextReveal";
import ProcessCard from "../Ui/ProcessCard";
import processes from "../../data/processes";

const WorkProcess = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {processes.map((process, index) => (
        <ProcessCard
          key={process.title}
          process={process}
          index={index}
          isHovered={hoveredIndex === index}
          onHover={() => setHoveredIndex(index)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};
const WorkProcessSection = () => {
  return (
    <section
      id="process"
      className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[10%] left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <TextReveal>
          <div className="flex justify-between items-end mb-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl font-bold text-white tracking-tight">
                Work Process
              </h2>
              <p className="text-gray-400 max-w-xl">
                A systematic approach to turning ideas into reality
              </p>
            </div>
            <div className="flex items-center gap-3 text-purple-400">
              <Code className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">
                How I Work
              </span>
            </div>
          </div>
        </TextReveal>
        <WorkProcess />
      </div>
    </section>
  );
};

export default WorkProcessSection;
