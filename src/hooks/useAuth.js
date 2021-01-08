// React and helpers
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authAxios from '../helpers/authAxios';
// Actions
import {
  setLoadingTrue,
  setLoadingFalse,
  toggleError,
  toggleSuccess,
  setErrorMsg,
  resetMisc,
} from '../redux/actions/miscActions';
import { storeUser } from '../redux/actions/userActions';
import {
  signIn as authenticateUser,
  logOut as signOut,
} from '../redux/actions/authActions';
import { wakeDyno } from '../redux/actions/herokuActions';
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

  const wakeHerokuDyno = () => {
    authAxios
      .get('')
      .then((response) => {
        if (response.statusText === 'OK') {
          dispatch(wakeDyno());
        }
      })
      .catch((error) => console.log(error));
  };

  const signIn = (email, password) => {
    dispatch(setLoadingTrue());
    authAxios
      .post('/authenticate', {
        email,
        password,
      })
      .then((response) => {
        storeToken(response);
        dispatch(setLoadingFalse());
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
        dispatch(setLoadingFalse());
        setTimeout(() => {
          dispatch(toggleError());
        }, 2000);
      });
  };

  const createAccount = (name, email, password, password_cfm) => {
    dispatch(setLoadingTrue());
    authAxios
      .post('/users', {
        name,
        email,
        password,
        password_confirmation: password_cfm,
      })
      .then((response) => {
        dispatch(setLoadingFalse());
        dispatch(toggleSuccess());
      })
      .catch((error) => {
        dispatch(setLoadingFalse());
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
    dispatch(setLoadingTrue());
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
            dispatch(setLoadingFalse());
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
            dispatch(setLoadingFalse());
            dispatch(setErrorMsg(error.response.data));
            setTimeout(() => {
              dispatch(setErrorMsg(''));
            }, 4000);
          });
      })
      .catch((error) => {
        dispatch(setLoadingFalse());
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
    dispatch(resetMisc());
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
    wakeHerokuDyno,
    signIn,
    createAccount,
    updatePassword,
    deleteAccount,
    logOut,
  };
};

export default useAuth;
