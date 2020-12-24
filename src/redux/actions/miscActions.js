import {
  TOGGLE_LOADING,
  TOGGLE_ERROR,
  SET_ERROR_MSG,
  TOGGLE_SUCCESS,
} from '../actionTypes';

export const toggleLoading = () => {
  return {
    type: TOGGLE_LOADING,
  };
};

export const toggleError = () => {
  return {
    type: TOGGLE_ERROR,
  };
};

export const setErrorMsg = (payload) => {
  return {
    type: SET_ERROR_MSG,
    payload,
  };
};

export const toggleSuccess = () => {
  return {
    type: TOGGLE_SUCCESS,
  };
};
