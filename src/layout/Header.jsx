import React from 'react';
import NavBar from '../components/NavBar';

function Header() {
  return (
    <header className="fixed top-0 z-20 w-full flex justify-center py-10">
      <NavBar />
    </header>
  );
}

export default Header;
