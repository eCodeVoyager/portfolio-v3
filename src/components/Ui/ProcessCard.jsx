import React from "react";


const ProcessCard = ({ process, index, isHovered, onHover, onLeave }) => {
  const Icon = process.icon;

  return (
    <div
      className="group relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`
          relative z-10 p-8 rounded-xl
          bg-gray-900/50 backdrop-blur-xl
          border border-gray-800/50 
          transition-all duration-500
          hover:border-purple-500/50 hover:bg-gray-900/80
          ${isHovered ? "scale-[1.02]" : "scale-100"}
        `}
      >
        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 blur-xl" />
        </div>

        {/* Icon with Glow Effect */}
        <div className="relative mb-6">
          <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
          <Icon className="relative w-10 h-10 text-purple-400 transition-transform duration-500 group-hover:scale-110 group-hover:text-purple-300" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-500 group-hover:text-purple-200">
          {process.title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
          {process.description}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
