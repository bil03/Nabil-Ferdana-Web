import React, { useState, useEffect } from 'react';

function NavBar() {
  const menuItems = ['Home', 'Projects', 'Skills', 'Experience', 'Certificates', 'Contact'];
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // section terlihat minimal 60%
      }
    );

    menuItems.forEach((item) => {
      const id = item.toLowerCase().replace(/\s+/g, '-');
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-6 py-2.5 rounded-lg shadow-md fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:text-base font-medium">
        {menuItems.map((item) => {
          const id = item.toLowerCase().replace(/\s+/g, '-');
          const isActive = activeSection === id;

          return (
            <li key={item}>
              <a href={`#${id}`} className={`transition duration-300 ${isActive ? 'text-white font-bold' : 'text-white/75 hover:text-white'}`}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
