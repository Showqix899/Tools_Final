import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="">
      <ul className="flex w-full justify-around items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold btn-error' : 'text-gray-500 ')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-500')}
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/drawing"
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-500')}
          >
            Drawing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/comedy"
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-500')}
          >
            Comedy
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
