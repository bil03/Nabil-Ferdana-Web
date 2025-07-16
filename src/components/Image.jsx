import React from 'react';
import { motion } from 'framer-motion';
import nabil from '../assets/image/nabil.jpg';

function Image() {
  return (
    <motion.div className="flex justify-end md:w-1/4 mt-2 md:mt-0 mb-4 md:mb-0" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }}>
      <div className="w-60 md:w-80 overflow-hidden rounded-lg shadow-lg">
        <img src={nabil} alt="Foto Nabil" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
}

export default Image;
