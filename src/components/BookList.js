import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { books, removeBook } = useContext(BookContext);
  const { isPurpleTheme, purple, dark } = useContext(ThemeContext);
  const theme = isPurpleTheme ? purple : dark;

  return (
    <div className="book-list" style={{
      color: ThemeContext.mainColor,
      background: theme.bg
    }}>
      <ul>
        {
          books.map(book =>
            <li key={book.id} style={{background: theme.ui}} onClick={() => removeBook(book.id)}> {book.title}, {book.author}
            </li>)
        }
      </ul>
    </div>
  );
}

export default BookList;
