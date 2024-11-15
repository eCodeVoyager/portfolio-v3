import React from "react";
import { Star } from "lucide-react";
import TextReveal from "../UI/TextReveal";
import ProjectCard from "../UI/ProjectCard";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="works" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <TextReveal>
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold text-white">Selected Works</h2>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span className="text-sm">Featured Projects</span>
            </div>
          </div>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
