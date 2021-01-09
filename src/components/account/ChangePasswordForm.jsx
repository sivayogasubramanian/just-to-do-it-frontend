// React and helpers
import React from 'react';
import useAuth from '../../hooks/useAuth';
// MUI Components
import { TextField, Button } from '@material-ui/core';
// Styles
import { useStyles } from './styles';

const ChangePasswordForm = ({ userId }) => {
  const classes = useStyles();

  const {
    email,
    setEmail,
    oldPassword,
    setOldPassword,
    password,
    setPassword,
    password_cfm,
    setPasswordCfm,
    updatePassword,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePassword(userId, email, oldPassword, password, password_cfm);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        size="medium"
        margin="normal"
        fullWidth
        label="Email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></TextField>
      <TextField
        variant="outlined"
        size="medium"
        margin="normal"
        fullWidth
        label="Old Password"
        type="password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      ></TextField>
      <TextField
        variant="outlined"
        size="medium"
        margin="normal"
        fullWidth
        label="New Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></TextField>
      <TextField
        variant="outlined"
        size="medium"
        margin="normal"
        fullWidth
        label="Confirm New Password"
        type="password"
        value={password_cfm}
        onChange={(e) => setPasswordCfm(e.target.value)}
      ></TextField>
      <Button
        className={classes.button}
        variant="contained"
        size="large"
        type="submit"
      >
        Change Password
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
