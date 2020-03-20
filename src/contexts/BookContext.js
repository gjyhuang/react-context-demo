import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: 'Name of the Wind', author: 'Person', id: 1 },
    { title: 'World War Z', author: 'Max Brooks', id: 2 },
    { title: 'Tom Sawyer', author: 'Mark Twain', id: 3 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, {title, id: books.length + 1}])
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook: addBook, removeBook: removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;
