import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function HomeContent() {
  return (
    <div className="text-center md:text-left md:w-3/4 flex flex-col items-center md:items-start animate-slide-in-left">
      <p className="text-3xl font-bold mb-4 text-white">
        Hi there! <span className="inline-block ml-4">I’m Nabil Ferdana.</span>
      </p>
      <p className="text-lg text-gray-200 mb-6">
        Informatics Engineering graduate with skills in software development and cloud computing. Experienced in building apps and leading projects. Passionate about creating tech-driven solutions.
      </p>

      <div className="flex space-x-4 mb-4">
        <a href="https://github.com/bil03" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="text-white hover:text-gray-400" sx={{ fontSize: 25 }} />
        </a>
        <a href="https://www.linkedin.com/in/nabil-ferdana" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="text-white hover:text-gray-400" sx={{ fontSize: 25 }} />
        </a>
        <a href="https://www.instagram.com/nabilferdana_03" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="text-white hover:text-gray-400" sx={{ fontSize: 25 }} />
        </a>
      </div>

      <div className="flex space-x-4">
        <a href="assets/files/CV.pdf" download="CV.pdf" className="bg-gray-800 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-700">
          Download CV
        </a>
        <a href="mailto:nabilferdana03@gmail.com" className="text-black px-4 py-2 rounded-md bg-white font-medium hover:bg-gray-200">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default HomeContent
