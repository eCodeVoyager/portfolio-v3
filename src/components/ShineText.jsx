import React from "react";
import { motion } from "framer-motion";

const ShineText = ({ text = "MOHIUDDIN AL EHSAN" }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#111] flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        <h1 className="text-2xl font-semibold tracking-[10px] shine-text">
          {text}
          <div className="shine-overlay">{text}</div>
        </h1>
      </div>
    </motion.div>
  );
};

export default ShineText;
