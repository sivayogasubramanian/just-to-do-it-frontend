import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authAxios from '../../helpers/authAxios';
import {
  toggleLoading,
  toggleError,
  toggleSuccess,
  setErrorMsg,
} from '../../actions/miscActions';

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
      })
      .catch((error) => {
        console.log(error.response.data);
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
  };
};

export default useAuth;