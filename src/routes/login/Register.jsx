// React and Helpers
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { toggleSuccess } from '../../actions/miscActions';
// MUI Components
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CircularProgress,
  Card,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
// MUI icons and App logo
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Logo from '../../assets/logo.png';
// Styles
import { useStyles } from './styles';

const Register = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    password_cfm,
    setPasswordCfm,
    createAccount,
  } = useAuth();

  const loading = useSelector((state) => state.misc.loading);
  const errorMsg = useSelector((state) => state.misc.errorMsg);
  const success = useSelector((state) => state.misc.success);

  const handleSubmit = (event) => {
    event.preventDefault();
    createAccount(name, email, password, password_cfm);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      className={classes.bgColor}
    >
      <Card raised>
        <Container component="main" maxWidth="xs">
          <div>
            <img
              className={classes.responsive}
              src={Logo}
              alt="Logo"
              width="400"
              height="110"
            />
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="Name"
                label="Name"
                name="name"
                autoFocus
                size="medium"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="medium"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="medium"
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password_confirmation"
                label="Password Confirmation"
                type="password"
                id="password_confirmation"
                autoComplete="current-password"
                size="medium"
                onChange={(e) => setPasswordCfm(e.target.value)}
              />
              <br />
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
              >
                Create New Account
              </Button>
              <br />
              <br />
              <Link to="/">Already have an account?</Link>
              <br />
              <br />
            </form>
            {loading && <CircularProgress />}
            {errorMsg && (
              <>
                <ErrorOutlineIcon color="error" fontSize="small" />
                {errorMsg.map((error) => (
                  <Typography variant="subtitle1" color="error">
                    {error}
                  </Typography>
                ))}
                <br />
              </>
            )}
            {success && (
              <>
                <Alert variant="outlined" severity="success" color="info">
                  Account created successfully! Please login now. You will be
                  redirected to login page.
                </Alert>
                <br />
                <p hidden>
                  {setTimeout(() => {
                    dispatch(toggleSuccess());
                    history.push('/');
                  }, 4000)}
                </p>
              </>
            )}
          </div>
        </Container>
      </Card>
    </Box>
  );
};

export default Register;
