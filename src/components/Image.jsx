import React from 'react';
import nabil from '../assets/image/nabil.jpg';

function Image() {
  return (
    <div className="flex justify-end md:w-1/4 mt-2 md:mt-0 mb-4 md:mb-0 animate-slide-in-right">
      <div className="w-60 md:w-80 overflow-hidden rounded-lg shadow-lg">
        <img src={nabil} alt="Foto Nabil" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Image;
