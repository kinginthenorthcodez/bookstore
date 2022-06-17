import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAPI } from '../redux/books/books';

const Addbook = () => {
  const [book, setState] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });
  const dispatch = useDispatch();
  const categories = ['Sci-fi', 'Epic', 'Action', 'Wuxia', 'Drama'];

  const submitBook = (e) => {
    e.preventDefault();
    if (book.title && book.author && book.category) {
      const newBook = { ...book, item_id: uuidv4() };
      dispatch(addBookAPI(newBook));
      setState({
        item_id: '',
        title: '',
        author: '',
        category: '',
      });
    }
  };

  const handelChange = (e) => {
    setState({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="add-book-section">
        <h1 className="form-book-title"> Add new Book</h1>
        <form className="add-book-form" onSubmit={submitBook}>
          <input
            type="text"
            name="title"
            value={book.title}
            placeholder="Add title..."
            onChange={handelChange}
          />
          <input
            type="text"
            name="author"
            value={book.author}
            placeholder="Add author..."
            onChange={handelChange}
          />
          <select
            className="category-sel"
            name="category"
            placeholder="Category"
            value={book.category}
            onChange={handelChange}
          >
            <option>Choose a category</option>
            {categories.sort().map((categ) => (
              <option key={uuidv4()} value={categ}>
                {categ}
              </option>
            ))}
          </select>
          <button type="submit" className="btn-submit submit active">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default Addbook;
