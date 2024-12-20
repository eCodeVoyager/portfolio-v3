import React, { useState } from "react";
import { Star } from "lucide-react";
import TextReveal from "../Ui/TextReveal";
import ProjectCard from "../Ui/ProjectCard";
import Background from "../Ui/Background";

const ProjectsSection = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="works"
      className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      <Background />

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <TextReveal>
          <div className="flex justify-between items-end mb-20">
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl font-bold text-white tracking-tight">
                Selected Works
              </h2>
              <p className="text-gray-400 max-w-xl">
                Explore my creative journey through these carefully crafted
                projects
              </p>
            </div>
            <div className="flex items-center gap-3 text-purple-400">
              <Star className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">
                Portfolio Showcase
              </span>
            </div>
          </div>
        </TextReveal>

        {/* Projects Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
