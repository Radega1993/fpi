import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-[#17e5e5]">Inicio</Link></li>
        <li><Link to="/tournaments" className="hover:text-[#17e5e5]">Torneos</Link></li>
        <li><Link to="/signup" className="hover:text-[#17e5e5]">Inscripción</Link></li>
        <li><Link to="/contact" className="hover:text-[#17e5e5]">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
