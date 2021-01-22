// Actions
import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_ERROR_TRUE,
  SET_ERROR_FALSE,
  SET_SUCCESS_TRUE,
  SET_SUCCESS_FALSE,
  SET_ERROR_MSG,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  SELECT_TAG,
  RESET_MISC,
} from '../actionTypes';

const initialState = {
  dialog: { isDialogOpen: false, todoId: null },
  loading: false,
  success: false,
  error: false,
  errorMsg: '',
  tag: '',
};

const miscReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return { ...state, loading: true };
    case SET_LOADING_FALSE:
      return { ...state, loading: false };
    case SET_ERROR_TRUE:
      return { ...state, error: true };
    case SET_ERROR_FALSE:
      return { ...state, error: false };
    case SET_SUCCESS_TRUE:
      return { ...state, success: true };
    case SET_SUCCESS_FALSE:
      return { ...state, success: false };
    case SET_ERROR_MSG:
      return { ...state, errorMsg: action.payload };
    case OPEN_DIALOG:
      return { ...state, dialog: { ...action.payload } };
    case CLOSE_DIALOG:
      return { ...state, dialog: { ...initialState.dialog } };
    case SELECT_TAG:
      return { ...state, tag: action.payload };
    case RESET_MISC:
      return initialState;
    default:
      return state;
  }
};

export default miscReducer;
