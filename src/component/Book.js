import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/books';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();
  const chaptervalue = Math.floor(Math.random() * 50);
  const value = chaptervalue / 100;
  return (
    <li className="book-item">
      <div>
        <h4 className="book-category">{category}</h4>
        <p className="book-title">{title}</p>
        <p className="'book-author">{author}</p>
        <div>
          <button type="button" className="btn">
            Comment
          </button>
          <button
            type="button"
            className="btn active"
            onClick={() => dispatch(remove(id))}
          >
            Remove
          </button>
          <button type="button" className="btn">
            Edit
          </button>
        </div>
      </div>
      <div className="stats-section">
        <div className="progress-circle">
          <div style={{ width: 70, height: 70 }}>
            <CircularProgressbar value={value} maxValue={1} />
          </div>
          <div>
            <h3 className="percentage">
              {value * 100}
              %
            </h3>
            <span className="completed">completed</span>
          </div>
        </div>
        <div className="chapter">
          <h5 className="current-chapter">current Chapter</h5>
          <h5 className="current-number">
            Chapter &nbsp;
            {chaptervalue}
          </h5>
          <button type="button" className="progress-btn submit">
            Update Progress
          </button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
