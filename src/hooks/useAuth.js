// React and helpers
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authAxios from '../helpers/authAxios';
// Actions
import {
  toggleLoading,
  toggleError,
  toggleSuccess,
  setErrorMsg,
} from '../redux/actions/miscActions';
import { storeUser } from '../redux/actions/userActions';
import {
  signIn as authenticateUser,
  logOut as signOut,
} from '../redux/actions/authActions';
import { clearTodos } from '../redux/actions/todosActions';

const storeToken = (response) => {
  if (response.status === 200) {
    localStorage.setItem('token', response.data.token);
  }
};

const useAuth = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_cfm, setPasswordCfm] = useState('');

  const signIn = (email, password) => {
    dispatch(toggleLoading());
    authAxios
      .post('/authenticate', {
        email,
        password,
      })
      .then((response) => {
        storeToken(response);
        dispatch(toggleLoading());
        dispatch(storeUser(response.data.user.data.attributes));
        dispatch(authenticateUser());
      })
      .catch((error) => {
        dispatch(toggleError());
        dispatch(toggleLoading());
        setTimeout(() => {
          dispatch(toggleError());
        }, 2000);
      });
  };

  const createAccount = (name, email, password, password_cfm) => {
    dispatch(toggleLoading());
    authAxios
      .post('/users', {
        name,
        email,
        password,
        password_confirmation: password_cfm,
      })
      .then((response) => {
        dispatch(toggleLoading());
        dispatch(toggleSuccess());
      })
      .catch((error) => {
        dispatch(toggleLoading());
        dispatch(setErrorMsg(error.response.data));
        setTimeout(() => {
          dispatch(setErrorMsg(''));
        }, 4000);
      });
  };

  const logOut = () => {
    dispatch(signOut());
    dispatch(storeUser([]));
    dispatch(clearTodos());
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    password_cfm,
    setPasswordCfm,
    signIn,
    createAccount,
    logOut,
  };
};

export default useAuth;
