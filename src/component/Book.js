import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <li>
      <div>
        <p>{title}</p>
        <p>{author}</p>
        <div>
          <button type="button">comment</button>
          <button type="button">remove</button>
          <button type="button">edit</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
