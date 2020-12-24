import { SIGN_IN, LOG_OUT } from './actionTypes';

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
