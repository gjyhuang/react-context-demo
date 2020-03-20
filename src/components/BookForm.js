import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // book context
  const { addBook } = useContext(BookContext);

  // theme context
  const { isPurpleTheme, purple, dark } = useContext(ThemeContext);
  const theme = isPurpleTheme ? purple : dark;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    addBook(title, author);
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={evt => setTitle(evt.target.value)}
        placeholder="Book Title" required
        style={{background: theme.ui, color: theme.mainColor}}
      ></input>
      <input
        type="text"
        value={author}
        onChange={evt => setAuthor(evt.target.value)}
        placeholder="Book Author" required
        style={{background: theme.ui, color: theme.mainColor}}
      ></input>
      <button type="submit">Add Book</button>
    </form>
  )
}

export default BookForm;
