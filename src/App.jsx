import React from 'react';
import Header from './layout/Header';
import StarBackground from './components/StarBackground';
import MouseBlob from './components/MouseBlob';
import Content from './layout/Content';
import Project from './layout/Project';
import Skills from './layout/skills';
import Experience from './layout/Experience';
import Certificates from './layout/Certificates';
import Contact from './layout/Contact';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background animasi */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] bg-[length:300%_300%] animate-bg-move z-0" />

      {/* Stars & meteors */}
      <StarBackground />

      {/* Mouse Blob */}
      <MouseBlob />

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="home" className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="w-full max-w-6xl mx-auto">
          <Content />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="w-full max-w-6xl mx-auto">
          <Project />
        </div>
      </section>

      {/* Skilss */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="w-full max-w-6xl mx-auto">
          <Skills />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative z-10 py-20 px-6">
        <div className="w-full max-w-6xl mx-auto">
          <Experience />
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="relative z-10 px-6">
        <div className="w-full max-w-6xl mx-auto">
          <Certificates />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 px-6">
        <div className="w-full max-w-6xl mx-auto">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
