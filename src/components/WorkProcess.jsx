import { motion } from "framer-motion";

import  processes  from "../data/processes";
const WorkProcess = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {processes.map((process, index) => (
        <motion.div
          key={process.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -10 }}
          className="p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800"
        >
          <process.icon className="w-8 h-8 mb-4 text-gray-400" />
          <h3 className="text-xl font-medium mb-2 text-white">
            {process.title}
          </h3>
          <p className="text-gray-400">{process.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkProcess;
