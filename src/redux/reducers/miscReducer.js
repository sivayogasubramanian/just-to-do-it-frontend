// Actions
import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  TOGGLE_ERROR,
  TOGGLE_SUCCESS,
  SET_ERROR_MSG,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  TOGGLE_SAVE,
  SELECT_TAG,
  RESET_MISC,
} from '../actionTypes';

const initialState = {
  dialog: { isDialogOpen: false, todoId: null },
  save: false,
  loading: false,
  success: false,
  error: false,
  errorMsg: '',
  tag: '',
};

const miscReducer = (state = initialState, action) => {
  const { error, success, save } = state;
  switch (action.type) {
    case SET_LOADING_TRUE:
      return { ...state, loading: true };
    case SET_LOADING_FALSE:
      return { ...state, loading: false };
    case TOGGLE_ERROR:
      return { ...state, error: !error };
    case TOGGLE_SUCCESS:
      return { ...state, success: !success };
    case TOGGLE_SAVE:
      return { ...state, save: !save };
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
