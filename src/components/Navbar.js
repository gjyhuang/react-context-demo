import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>React Context Reading List</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;
