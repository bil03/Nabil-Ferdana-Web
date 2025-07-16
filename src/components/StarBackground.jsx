import { useEffect, useState } from 'react';
import Meteor from './Meteor';

export default function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    spawnMeteor(); // Start loop spawn

    const resize = () => generateStars();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const generateStars = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    setStars(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 3 + 2,
      }))
    );
  };

  const spawnMeteor = () => {
    const newMeteor = {
      id: Math.random(),
      side: Math.random() < 0.5 ? 'left' : 'right',
      y: Math.random() * 50,
      duration: Math.random() * 2 + 2,
      delay: 0,
    };

    setMeteors((prev) => [...prev, newMeteor]);

    // spawn meteor baru setiap 3-5 detik
    setTimeout(spawnMeteor, Math.random() * 3000 + 2000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: `twinkle ${star.duration}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {meteors.map((m) => (
        <Meteor key={m.id} {...m} />
      ))}
    </div>
  );
}
