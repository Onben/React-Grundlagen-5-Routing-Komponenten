import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="flex justify-between mx-2 mt-2 mb-4 border-b border-gray-400 pb-4 pt-2">
      <div className="w-32">
        <svg id="logo-54" width="120" viewBox="0 0 170 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG paths here */}
        </svg>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/" exact activeClassName="text-orange-600" className="text-xs hover:underline">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="text-orange-600" className="text-xs hover:underline">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="text-orange-600" className="text-xs hover:underline">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="text-orange-600" className="text-xs bg-orange-600 p-1 rounded-lg text-white shadow-lg hover:bg-orange-500">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};