import React, { useEffect, useRef } from 'react';

function MouseBlob() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;

    const moveBlob = (e) => {
      blob.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        {
          duration: 300,
          fill: 'forwards',
        }
      );
    };

    window.addEventListener('mousemove', moveBlob);
    return () => window.removeEventListener('mousemove', moveBlob);
  }, []);

  return (
    <div
      ref={blobRef}
      className="pointer-events-none fixed top-0 left-0 w-32 h-32 bg-purple-500 opacity-30 blur-3xl rounded-full z-0"
    ></div>
  );
}

export default MouseBlob;
