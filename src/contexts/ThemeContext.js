import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      purple: {
        mainColor: '#4c2a4c',
        ui: "#6d3d6d",
        bg: "#eee"
      },
      dark: {
        mainColor: '#ddd',
        ui: '#333',
        bg: '#555'
      }
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

// this.props.children - refers to navbar, booklist, everything rendered in themeContextProvider
