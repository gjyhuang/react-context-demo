import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      isPurpleTheme: true,
      purple: {
        mainColor: '#eee',
        ui: "#6d3d6d",
        bg: "#4c2a4c"
      },
      dark: {
        mainColor: '#ddd',
        ui: '#333',
        bg: '#555'
      }
    }
  }

  // this should flip the flag
  toggleTheme = () => {
    this.setState({...this.state, isPurpleTheme: !this.state.isPurpleTheme})
  }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

// this.props.children - refers to navbar, booklist, everything rendered in themeContextProvider

/*

theme context provider -> value is global state

*/
