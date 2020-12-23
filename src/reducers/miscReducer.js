const initialState = { loading: false, error: false };

const miscReducer = (state = initialState, action) => {
  const { loading, error } = state;
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return { ...state, loading: !loading };
    case 'TOGGLE_ERROR':
      return { ...state, error: !error };
    default:
      return state;
  }
};

export default miscReducer;
