// Actions
import {
  SEARCH_TITLE,
  SEARCH_TAG,
  CANCEL_SEARCH,
  SET_SEARCH_VIEW,
} from '../actionTypes';

export const setSearchView = (payload) => {
  return {
    type: SET_SEARCH_VIEW,
    payload,
  };
};

export const searchTitle = (payload) => {
  return {
    type: SEARCH_TITLE,
    payload,
  };
};

export const searchTags = (payload) => {
  return {
    type: SEARCH_TAG,
    payload,
  };
};

export const cancelSearch = () => {
  return {
    type: CANCEL_SEARCH,
  };
};
