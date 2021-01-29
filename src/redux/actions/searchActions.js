// Actions
import {
  SEARCH_TITLE,
  SEARCH_TAG,
  SEARCH_DATE,
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

export const searchDate = (from = '', to = '') => {
  return {
    type: SEARCH_DATE,
    payload: { from, to },
  };
};

export const cancelSearch = () => {
  return {
    type: CANCEL_SEARCH,
  };
};
