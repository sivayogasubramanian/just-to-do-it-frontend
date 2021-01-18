// Actions
import {
  SEARCH_TITLE,
  SEARCH_TAG,
  CANCEL_SEARCH,
  SET_SEARCH_VIEW,
} from '../actionTypes';

const initialState = { isSearchActive: false, view: 10, title: '', tags: [] };

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VIEW:
      return { ...state, view: action.payload };
    case SEARCH_TITLE:
      return { ...state, title: action.payload, isSearchActive: true };
    case SEARCH_TAG:
      return { ...state, tags: action.payload, isSearchActive: true };
    case CANCEL_SEARCH:
      return { ...initialState, view: state.view };
    default:
      return state;
  }
};

export default searchReducer;
