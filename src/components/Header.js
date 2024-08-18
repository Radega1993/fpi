import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Footbol Player Improvement</h1>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
