import React from 'react';
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

const Register = () => {
  const classes = useStyles();
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
            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="Name"
                label="Name"
                name="name"
                autoFocus
                size="medium"
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
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password_confirmation"
                label="Password Confirmation"
                type="password_confirmation"
                id="password_confirmation"
                autoComplete="current-password"
                size="medium"
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
          </div>
        </Container>
      </Paper>
    </Box>
  );
};

export default Register;
