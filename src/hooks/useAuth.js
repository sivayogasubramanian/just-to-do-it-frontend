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
import { fetchTodos, clearTodos } from '../redux/actions/todosActions';

const storeToken = (response) => {
  if (response.status === 200) {
    localStorage.setItem('token', response.data.token);
  }
};

const removeToken = () => {
  localStorage.removeItem('token');
};

const useAuth = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
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
        dispatch(
          storeUser({
            id: response.data.user.data.id,
            ...response.data.user.data.attributes,
          })
        );
        dispatch(authenticateUser());
        dispatch(fetchTodos());
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

  const updatePassword = (
    userId,
    email,
    oldPassword,
    password,
    password_cfm
  ) => {
    dispatch(toggleLoading());
    authAxios
      .post('/authenticate', {
        email,
        password: oldPassword,
      })
      .then(() => {
        authAxios
          .patch(`/users/${userId}`, {
            password,
            password_confirmation: password_cfm,
          })
          .then(() => {
            dispatch(toggleLoading());
            dispatch(toggleSuccess());
            setEmail('');
            setOldPassword('');
            setPassword('');
            setPasswordCfm('');
            setTimeout(() => {
              dispatch(toggleSuccess());
            }, 4000);
          })
          .catch((error) => {
            dispatch(toggleLoading());
            dispatch(setErrorMsg(error.response.data));
            setTimeout(() => {
              dispatch(setErrorMsg(''));
            }, 4000);
          });
      })
      .catch((error) => {
        dispatch(toggleLoading());
        dispatch(setErrorMsg(error.response.data));
        setTimeout(() => {
          dispatch(setErrorMsg(''));
        }, 4000);
      });
  };

  const deleteAccount = (userId) => {
    authAxios
      .delete(`/users/${userId}`)
      .then(() => logOut())
      .catch((error) => console.error(error));
  };

  const logOut = () => {
    dispatch(signOut());
    dispatch(storeUser([]));
    dispatch(clearTodos());
    removeToken();
  };

  return {
    name,
    setName,
    email,
    setEmail,
    oldPassword,
    setOldPassword,
    password,
    setPassword,
    password_cfm,
    setPasswordCfm,
    signIn,
    createAccount,
    updatePassword,
    deleteAccount,
    logOut,
  };
};

export default useAuth;
