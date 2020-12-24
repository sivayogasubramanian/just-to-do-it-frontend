import {
  TOGGLE_LOADING,
  TOGGLE_ERROR,
  TOGGLE_SUCCESS,
  SET_ERROR_MSG,
} from '../actionTypes';

const initialState = {
  loading: false,
  success: false,
  error: false,
  errorMsg: '',
};

const miscReducer = (state = initialState, action) => {
  const { loading, error, success } = state;
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, loading: !loading };
    case TOGGLE_ERROR:
      return { ...state, error: !error };
    case TOGGLE_SUCCESS:
      return { ...state, success: !success };
    case SET_ERROR_MSG:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

export default miscReducer;
