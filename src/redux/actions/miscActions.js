// Actions
import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_ERROR_TRUE,
  SET_ERROR_FALSE,
  SET_ERROR_MSG,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  SELECT_TAG,
  RESET_MISC,
  SET_SUCCESS_FALSE,
  SET_SUCCESS_TRUE,
} from '../actionTypes';

export const setLoadingTrue = () => {
  return {
    type: SET_LOADING_TRUE,
  };
};

export const setLoadingFalse = () => {
  return {
    type: SET_LOADING_FALSE,
  };
};

export const setErrorTrue = () => {
  return {
    type: SET_ERROR_TRUE,
  };
};

export const setErrorFalse = () => {
  return {
    type: SET_ERROR_FALSE,
  };
};

export const setErrorMsg = (payload) => {
  return {
    type: SET_ERROR_MSG,
    payload,
  };
};

export const setSuccessTrue = () => {
  return {
    type: SET_SUCCESS_TRUE,
  };
};

export const setSuccessFalse = () => {
  return {
    type: SET_SUCCESS_FALSE,
  };
};

export const openDialog = (payload) => {
  return {
    type: OPEN_DIALOG,
    payload,
  };
};

export const closeDialog = () => {
  return {
    type: CLOSE_DIALOG,
  };
};

export const selectTag = (payload) => {
  return {
    type: SELECT_TAG,
    payload,
  };
};

export const resetMisc = () => {
  return {
    type: RESET_MISC,
  };
};
