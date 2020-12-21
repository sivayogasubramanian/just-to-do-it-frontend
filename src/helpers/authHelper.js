import authAxios from './authAxios';

const storeToken = (response) => {
  if (response.status === 200) {
    localStorage.setItem('token', response.data.token);
  }
};

export const signIn = (email, password, setError, setLoading) => {
  setLoading(true);
  authAxios
    .post('/authenticate', {
      email,
      password,
    })
    .then((response) => {
      storeToken(response);
      setError(false);
      setLoading(false);
    })
    .catch((error) => {
      setError(true);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 4000);
    });
};

export const createAccount = (
  name,
  email,
  password,
  password_cfm,
  setErrorMsg,
  setLoading,
  setSuccess
) => {
  setLoading(true);
  authAxios
    .post('/users', {
      name,
      email,
      password,
      password_confirmation: password_cfm,
    })
    .then((response) => {
      setLoading(false);
      setSuccess(true);
    })
    .catch((error) => {
      setLoading(false);
      setErrorMsg(error.response.data);
      setTimeout(() => {
        setErrorMsg('');
      }, 4000);
    });
};
