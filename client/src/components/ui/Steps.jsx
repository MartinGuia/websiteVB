import React from "react";
import { motion } from 'framer-motion';

const Steps = ({ titulo, descripcion, delay }) => {
  return (
    //   <div className="p-4 bg-gray-100 rounded-md">
    //     <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
    //     <p>{descripcion}</p>
    //   </div>
    <motion.div
      className="p-4 bg-gray-100 rounded-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
      <p>{descripcion}</p>
    </motion.div>
  );
};

export default Steps;
