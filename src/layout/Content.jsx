import React from 'react';
import Image from '../components/Image';
import HomeContent from '../components/HomeContent';

function Content() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-x-12 px-4">
      <HomeContent />
      <Image />
    </div>
  );
}

export default Content;
