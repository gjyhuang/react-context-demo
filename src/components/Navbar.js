import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  return (
    <ThemeContext.Consumer>{(value) => {
      const { isPurpleTheme, purple, dark, toggleTheme } = value;
      const theme = isPurpleTheme ? purple : dark;
      return (
        <div className="navbar" style={{
          background: theme.ui,
          color: theme.mainColor,
        }}>
          <h1>React Context Reading List</h1>
          <button onClick={value.toggleTheme}>Click to toggle theme</button>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        );
      }}
    </ThemeContext.Consumer>
  )
}

export default Navbar;
