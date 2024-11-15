import React from "react";
import { motion } from "framer-motion";
import { Star, Github, ExternalLink } from "lucide-react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import TextReveal from "../UI/TextReveal";

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

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <Card className="p-6 bg-gray-900/30 border-gray-800/50 hover:border-gray-700 transition-all duration-300 transform group-hover:-translate-y-2">
        <div className="aspect-video bg-gray-800 mb-6 overflow-hidden rounded-lg relative">
          <motion.div
            className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="outline" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              View Project
            </Button>
          </div>
        </div>

        <h3 className="text-2xl font-medium mb-4 text-white">
          {project.title}
        </h3>

        <div className="space-y-4">
          <p className="text-sm text-gray-400">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-gray-800 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <span className="text-sm">{project.year}</span>
            <div className="flex gap-4">
              <motion.a
                href={project.github}
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={project.live}
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectsSection;
