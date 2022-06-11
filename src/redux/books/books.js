// reducer
const reducer = (state = [], action) => {
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
