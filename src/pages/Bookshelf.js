import React, { useState } from 'react';
import Book from '../component/Book';

const Bookshelf = () => {
  const [books, newBook] = useState([
    {
      id: 1,
      title: 'Expanse',
      author: 'Maqueen',
    },
    {
      id: 2,
      title: 'Expanse',
      author: 'Maqueen',
    },
    {
      id: 3,
      title: 'Expanse',
      author: 'Maqueen',
    },
  ]);

  const addBook = () => {
    const book = {
      id: 4,
      title: 'Expanse',
      author: 'Maqueen',
    };
    newBook(book);
  };
  console.log(books);

  return (
    <>
      <div>
        <ul>
          {books.map(({ id, title, author }) => (
            <Book key={id} title={title} author={author} addBook={addBook} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Bookshelf;
