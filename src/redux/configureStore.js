import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookReducer, { fetchBooks } from './books/books';
import categoryReducer from './categories/categories';

const allReducers = combineReducers({
  bookReducer,
  categoryReducer,
});
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

store.dispatch(fetchBooks());
export default store;
