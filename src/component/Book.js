import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author, category } = props;
  return (
    <li>
      <div>
        <h4 className="book-category">{category}</h4>
        <p className="book-title">{title}</p>
        <p className="'book-author">{author}</p>
        <div>
          <button type="button" className="btn">
            comment
          </button>
          <button type="button" className="btn">
            remove
          </button>
          <button type="button" className="btn">
            edit
          </button>
        </div>
      </div>
      <div className="stats-section">
        <div className="progress-circle">
          <div>
            <span>circle</span>
          </div>
          <div>
            <h3 className="percentage">100%</h3>
            <span className="completed">completed</span>
          </div>
        </div>
        <div className="chapter">
          <h5 className="current-chapter">current Chapter</h5>
          <h5 className="current-number">Chapter Number</h5>
          <button type="button" className="progress-btn">
            Update Progress
          </button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
