import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const allReducers = combineReducers({
  bookReducer,
  categoryReducer,
});
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
const store = createStore(allReducers);

export default store;
