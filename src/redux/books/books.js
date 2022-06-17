// reducer
const initialState = [];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.item_id !== action.payload);
    case 'FETCH_OK':
      return [...action.payload];
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

export const onFetchOk = (data) => ({
  type: 'FETCH_OK',
  payload: data,
});

export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ag3KzV7BeBsDly8lLUwL/books',
  );
  const booksData = await response.json();
  console.log('empty', booksData);
  const books = booksData.map((book) => book);
  dispatch(onFetchOk(books));
};

export const addBookAPI = (book) => async (dispatch) => {
  dispatch(addBook(book));
  await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ag3KzV7BeBsDly8lLUwL/books',
    {
      method: 'POST',
      body: JSON.stringify(book),
      headers: { 'Content-type': 'application/JSON' },
    },
  );
};

export const remove = (id) => async (dispatch) => {
  dispatch(removeBook(id));
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ag3KzV7BeBsDly8lLUwL/books/${id}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: { 'Content-type': 'application/JSON' },
    },
  );
};
export default reducer;
