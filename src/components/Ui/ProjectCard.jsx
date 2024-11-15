
import React, { useState } from "react";
import { Star, ExternalLink, Github, MousePointer2 } from "lucide-react";

const ProjectCard = ({ project, index, isHovered, onHover, onLeave }) => {
  return (
    <div
      className="group relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`
        relative z-10 p-8 rounded-xl bg-gray-900/50 backdrop-blur-xl
        border border-gray-800/50 transition-all duration-500
        hover:border-purple-500/50 hover:bg-gray-900/80
        ${isHovered ? "scale-[1.02]" : "scale-100"}
      `}
      >
        {/* Project Image Container */}
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 group-hover:opacity-0 transition-opacity" />
          <div
            className={`
            absolute inset-0 bg-gray-900/90 flex items-center justify-center
            transition-opacity duration-300
            ${isHovered ? "opacity-90" : "opacity-0"}
          `}
          >
            <div className="flex flex-col items-center gap-4">
              <MousePointer2 className="w-6 h-6 text-purple-400 animate-bounce" />
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="hover:scale-110 transition-transform"
                >
                  <button className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-purple-600 transition-colors flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                </a>
                <a
                  href={project.live}
                  className="hover:scale-110 transition-transform"
                >
                  <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full
                  bg-gray-800/50 text-purple-300 border border-purple-500/20
                  hover:border-purple-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-gray-800/50 flex items-center justify-between text-gray-400">
            <span className="text-sm">{project.year}</span>
            <div className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300">
              Featured Project
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
