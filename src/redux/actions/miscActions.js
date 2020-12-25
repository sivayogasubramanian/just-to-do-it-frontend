// Actions
import {
  TOGGLE_LOADING,
  TOGGLE_ERROR,
  SET_ERROR_MSG,
  TOGGLE_SUCCESS,
  OPEN_DIALOG,
  CLOSE_DIALOG,
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
