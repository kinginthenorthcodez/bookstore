// reducer

const initialState = [
  {
    id: 1,
    title: 'Expanse',
    author: 'Maqueen',
    category: 'Sci-fi',
  },
  {
    id: 2,
    title: 'The Wheel of Time',
    author: 'J.R.Rowlings',
    category: 'Epic',
  },
  {
    id: 3,
    title: 'Game of thrones',
    author: 'George.R.Martin',
    category: 'Epic',
  },
];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

// actions

export const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

export const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  payload: id,
});

export default reducer;
