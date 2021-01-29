// Actions
import {
  SEARCH_TITLE,
  SEARCH_TAG,
  SEARCH_DATE,
  CANCEL_SEARCH,
  SET_SEARCH_VIEW,
} from '../actionTypes';

const initialState = {
  isSearchActive: false,
  view: 10,
  title: '',
  tags: [],
  date: { from: '', to: '' },
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VIEW:
      return { ...state, view: action.payload };
    case SEARCH_TITLE:
      return { ...state, title: action.payload, isSearchActive: true };
    case SEARCH_TAG:
      return { ...state, tags: action.payload, isSearchActive: true };
    case SEARCH_DATE:
      return {
        ...state,
        date: { from: action.payload.from, to: action.payload.to },
        isSearchActive: true,
      };
    case CANCEL_SEARCH:
      return { ...initialState, view: state.view };
    default:
      return state;
  }
};

export default searchReducer;
