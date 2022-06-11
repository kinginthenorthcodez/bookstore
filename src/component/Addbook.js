import React, { useState } from 'react';

const Addbook = () => {
  const [book, setState] = useState({
    id: '',
    title: '',
    author: '',
    category: '',
  });
  const [tempBooks, setTempBooks] = useState([]);

  const submitBook = (e) => {
    e.preventDefault();
    if (book.title && book.author && book.category) {
      const newBook = { ...book, id: new Date().getTime().toString() };
      setTempBooks([...tempBooks, newBook]);
      setState({
        id: '', title: '', author: '', category: '',
      });
    }
  };

  const handelChange = (e) => {
    setState({ ...book, [e.target.name]: e.target.value });
  };

  console.log(tempBooks);
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
            <option>Epic</option>
          </select>
          <button type="submit" className=" btn btn-submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Addbook;
