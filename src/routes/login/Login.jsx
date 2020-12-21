import React, { useState } from 'react';
import {
  Box,
  Paper,
  Button,
  TextField,
  Typography,
  Container,
} from '@material-ui/core';
import Logo from '../../assets/logo.png';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:4000/authenticate', {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <br />
            <img src={Logo} alt="Logo" width="400" height="110" />
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
          </div>
        </Container>
      </Paper>
    </Box>
  );
};

export default SignIn;
