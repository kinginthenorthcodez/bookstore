import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../component/Book';

const Bookshelf = () => {
  const books = useSelector((state) => state.bookReducer);
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
          {books.map(({
            id, title, author, category,
          }) => (
            <Book
              key={id}
              id={id}
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
