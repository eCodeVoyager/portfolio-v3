import React, { useState } from "react";
import { Code2, Database, Layout, Shapes, Star, Wrench } from "lucide-react";
import TextReveal from "../Ui/TextReveal";
import BackgroundReverse from "../Ui/BackgroundReverse";

const TechStackSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 88 },
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 82 },
      ],
      color: "from-green-500 to-emerald-400",
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
      ],
      color: "from-purple-500 to-pink-400",
    },
  ];

  return (
    <section
      id="stack"
      className="relative py-32 px-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Artistic Background Elements */}
      <BackgroundReverse />
      <div className="max-w-7xl mx-auto relative">
        <TextReveal>
          <div className="flex justify-between items-end mb-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl font-bold text-white tracking-tight">
                Tech Stack
              </h2>
              <p className="text-gray-400 max-w-xl">
                A collection of tools and technologies I use to build modern web
                applications
              </p>
            </div>
            <div className="flex items-center gap-3 text-purple-400">
              <Code2 className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">
                Technologies
              </span>
            </div>
          </div>
        </TextReveal>
      </div>
    </section>
  );
};

export default TechStackSection;
