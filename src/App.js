import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import BookContextProvider from './contexts/BookContext';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookContextProvider>
          <Navbar />
          <BookList />
          <BookForm />
        </BookContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
