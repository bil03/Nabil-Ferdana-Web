import React from 'react';
import { motion } from 'framer-motion';

export default function CertificateCard({ cert }) {
  const images = import.meta.glob('../assets/image/Certificates/*.png', {
    eager: true,
    query: '?url',
    import: 'default',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(5px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700"
    >
      <img src={images[`../assets/image/Certificates/${cert.image}`]} alt={cert.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-white">{cert.title}</h3>
        <p className="text-sm text-gray-400">{cert.issuer}</p>
      </div>
    </motion.div>
  );
}
