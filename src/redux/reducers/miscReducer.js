// Actions
import {
  TOGGLE_LOADING,
  TOGGLE_ERROR,
  TOGGLE_SUCCESS,
  SET_ERROR_MSG,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  TOGGLE_SAVE,
} from '../actionTypes';

const initialState = {
  dialog: { isDialogOpen: false, todoId: null },
  save: false,
  loading: false,
  success: false,
  error: false,
  errorMsg: '',
};

const miscReducer = (state = initialState, action) => {
  const { loading, error, success, save } = state;
  switch (action.type) {
    case TOGGLE_LOADING:
      return { ...state, loading: !loading };
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
    default:
      return state;
  }
};

export default miscReducer;
