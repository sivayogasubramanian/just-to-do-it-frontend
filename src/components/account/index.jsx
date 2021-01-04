import React from 'react';
import {
  Paper,
  TextField,
  Grid,
  Typography,
  Slide,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const Account = ({ userId, username, loading, success, errorMsg }) => {
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
    <Slide in={true} direction="down">
      <Paper elevation={24} className={classes.paper}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <Typography color="inherit" variant="h4">
            <b>{username}'s</b> account
          </Typography>
          <Typography color="inherit" variant="h5">
            Change Your Password Here
          </Typography>
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
        </Grid>
        {loading && <CircularProgress />}
        {errorMsg && (
          <>
            <ErrorOutlineIcon color="error" fontSize="small" />
            {errorMsg.error ? (
              <Typography variant="h6" color="error">
                Your email and/or old password is wrong. Please Try again.
              </Typography>
            ) : (
              errorMsg.map((error, index) => (
                <Typography key={index} variant="h6" color="error">
                  {error}
                </Typography>
              ))
            )}
            <br />
          </>
        )}
        {success && (
          <>
            <Alert variant="outlined" severity="success" color="success">
              Password Updated Successfully!
            </Alert>
            <br />
          </>
        )}
      </Paper>
    </Slide>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    username: state.user.name,
    loading: state.misc.loading,
    success: state.misc.success,
    errorMsg: state.misc.errorMsg,
  };
};

export default connect(mapStateToProps)(Account);
