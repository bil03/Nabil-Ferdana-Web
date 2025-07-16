import React from 'react';
import certificates from '../utils/certificates.json';
import CertificateCard from '../components/CertificateCard';

export default function Certificates() {
  // Import gambar secara otomatis pakai Vite Glob
  const images = import.meta.glob('../assets/image/Certificates/*.png', {
    eager: true,
    import: 'default',
    query: '?url',
  });

  return (
    <div className="py-20 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">My Certificates 🎖️</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <CertificateCard key={idx} cert={cert} image={images[`../assets/image/Certificates/${cert.image}`]} />
        ))}
      </div>
    </div>
  );
}
