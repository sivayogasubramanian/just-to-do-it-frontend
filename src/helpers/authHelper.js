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
      email: email,
      password: password,
    })
    .then((response) => {
      storeToken(response);
      setError(false);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setError(true);
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 3000);
    });
};

export const createAccount = (name, email, password, password_cfm) => {};
