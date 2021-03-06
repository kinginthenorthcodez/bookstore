import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from '../component/Book';
import { onFetchOk } from '../redux/books/books';

const Bookshelf = () => {
  const books = useSelector((state) => state.bookReducer);

  useEffect(() => {
    onFetchOk();
  }, [books]);

  const addBook = () => {
    const book = {
      id: 4,
      title: 'Expanse',
      author: 'Maqueen',
      category: 'Sci-Fi',
    };
    console.log(book);
  };

  return (
    <>
      <div className="book-container">
        <ul className="book-items">
          {books.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              addBook={addBook}
            />
          ))}
        </ul>
        <hr />
      </div>
    </>
  );
};

export default Bookshelf;
