// React and Helpers
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import useAuth from '../../hooks/useAuth';
// MUI Components
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Card,
  Zoom,
} from '@material-ui/core';
import SyncLoader from 'react-spinners/SyncLoader';
// MUI icons and App logo
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Logo from '../../assets/logo.png';
// Styles
import { useStyles } from './styles';

const Login = ({ loading, error, isAuthenticated }) => {
  const classes = useStyles();
  const { email, setEmail, password, setPassword, signIn } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    signIn(email, password);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      className={classes.bgColor}
    >
      <Zoom in={true}>
        <Card raised>
          <Container component="main" maxWidth="xs">
            <div>
              <br />
              <img
                className={classes.responsive}
                src={Logo}
                alt="Logo"
                width="400"
                height="110"
              />
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
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
                <br />
                <br />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  Sign In
                </Button>
                <br />
                <br />
                <Link to="/register">Don't have an account? Register here</Link>
                <br />
                <br />
              </form>
              {loading && (
                <div className={classes.loader}>
                  <SyncLoader color="#4745DB" size="10" margin="7" />
                </div>
              )}
              {error && (
                <>
                  <ErrorOutlineIcon color="error" fontSize="small" />
                  <Typography variant="subtitle1" color="error">
                    Your email or password is incorrect. Please try again.
                  </Typography>
                  <br />
                </>
              )}
              {isAuthenticated && <Redirect to="/home" />}
            </div>
          </Container>
        </Card>
      </Zoom>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.misc.loading,
    error: state.misc.error,
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Login);
