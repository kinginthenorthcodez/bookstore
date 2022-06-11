import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = 'Under Construction!';
  const defaultStatus = useSelector((state) => state.categoryReducer);
  return (
    <>
      <h4>{defaultStatus}</h4>
      <button type="button" onClick={() => dispatch(checkStatus(status))}>
        Check status
      </button>
    </>
  );
};

export default Categories;
