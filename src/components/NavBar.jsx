import React from 'react';

function NavBar() {
  const menuItems = ['Home', 'Projects', 'Skills', 'Experience', 'Certificates', 'Contact'];

  return (
    <nav className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-6 py-2.5 rounded-lg shadow-md">
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:text-base font-medium">
        {menuItems.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-white/75 hover:text-white transition duration-300">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
