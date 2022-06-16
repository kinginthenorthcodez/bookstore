import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = 'Under Construction!';
  const defaultStatus = useSelector((state) => state.categoryReducer);
  return (
    <>
      <h4 className="categories-status">{defaultStatus}</h4>
      <div className="btn-status">
        <button
          type="button"
          className="btn-update-status submit"
          onClick={() => dispatch(checkStatus(status))}
        >
          Check status
        </button>
      </div>
    </>
  );
};

export default Categories;
