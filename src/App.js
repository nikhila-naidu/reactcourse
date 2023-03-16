import React from 'react';
import './index.css';
import { books } from './books';
import Book from './Book';

const App = () => {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
};

export default App;
