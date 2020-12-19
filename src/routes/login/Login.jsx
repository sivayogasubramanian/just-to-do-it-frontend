import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box, Paper } from '@material-ui/core';
import Logo from '../../assets/logo.png';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      className={classes.bgColor}
    >
      <Paper variant="elevation" elevation="24">
        <Container component="main" maxWidth="xs">
          <div>
            <br />
            <img src={Logo} alt="Logo" width="400" height="110" />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                size="large"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="large"
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
