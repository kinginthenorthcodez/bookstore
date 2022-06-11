// reducer
const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'STATUS':
      return action.payload;
    default:
      return state;
  }
};

// actions

export const checkStatus = (status) => ({
  type: 'STATUS',
  payload: status,
});

export default categoryReducer;
