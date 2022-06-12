import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from '../component/Book';
import { onFetchOk } from '../redux/books/books';

const Bookshelf = () => {
  const books = useSelector((state) => state.bookReducer);

  useEffect(() => {
    onFetchOk();
  }, [books]);
  // const [books, newBook] = useState([
  //   {
  //     id: 1,
  //     title: 'Expanse',
  //     author: 'Maqueen',
  //     category: 'Sci-Fi',
  //   },
  //   {
  //     id: 2,
  //     title: 'Expanse',
  //     author: 'Maqueen',
  //     category: 'Sci-Fi',
  //   },
  //   {
  //     id: 3,
  //     title: 'Expanse',
  //     author: 'Maqueen',
  //     category: 'Sci-Fi',
  //   },
  // ]);

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
      <div>
        <ul>
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
      </div>
    </>
  );
};

export default Bookshelf;
