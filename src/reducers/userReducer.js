const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_USER':
      return action.payload;
    case 'REMOVE_USER':
      return [];
    default:
      return state;
  }
};

export default userReducer;