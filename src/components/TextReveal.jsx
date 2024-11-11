import { motion } from "framer-motion";

const TextReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className="overflow-hidden"
    >
      <motion.div>{children}</motion.div>
    </motion.div>
  );
};

export default TextReveal;
