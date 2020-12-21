import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Paper,
  Button,
  TextField,
  Typography,
  Container,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Logo from '../../assets/logo.png';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { createAccount } from '../../helpers/authHelper';

const Register = () => {
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_cfm, setPasswordCfm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    createAccount(
      name,
      email,
      password,
      password_cfm,
      setErrorMsg,
      setLoading,
      setSuccess
    );
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      className={classes.bgColor}
    >
      <Paper variant="elevation" elevation={24}>
        <Container component="main" maxWidth="xs">
          <div>
            <img src={Logo} alt="Logo" width="400" height="110" />
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
                    history.push('/');
                  }, 4000)}
                </p>
              </>
            )}
          </div>
        </Container>
      </Paper>
    </Box>
  );
};

export default Register;
