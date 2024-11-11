import { useEffect } from "react";
import { useMotionValue } from "framer-motion";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
      style={{ x: cursorX, y: cursorY }}
    >
      <motion.div
        className="w-full h-full border-2 border-white rounded-full"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default CustomCursor;
