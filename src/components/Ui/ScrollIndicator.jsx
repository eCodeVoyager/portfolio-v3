import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ScrollIndicator() {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showIndicator && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }} 
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
        >
          <div className="w-7 h-10 text-white/80 border-2 rounded-2xl flex flex-col items-center">
            <div className="w-[2px] h-2 bg-white/80 mt-[10px] rounded-xl animate-bounce"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollIndicator;
