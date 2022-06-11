import React, { useState } from 'react';
import Book from '../component/Book';

const Bookshelf = () => {
  const [books, newBook] = useState([
    {
      id: 1,
      title: 'Expanse',
      author: 'Maqueen',
      category: 'Sci-Fi',
    },
    {
      id: 2,
      title: 'Expanse',
      author: 'Maqueen',
      category: 'Sci-Fi',
    },
    {
      id: 3,
      title: 'Expanse',
      author: 'Maqueen',
      category: 'Sci-Fi',
    },
  ]);

  const addBook = () => {
    const book = {
      id: 4,
      title: 'Expanse',
      author: 'Maqueen',
      category: 'Sci-Fi',
    };
    newBook(book);
  };
  console.log(books);

  return (
    <>
      <div>
        <ul>
          {books.map(({
            id, title, author, category,
          }) => (
            <Book
              key={id}
              title={title}
              author={author}
              category={category}
              addBook={addBook}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Bookshelf;
