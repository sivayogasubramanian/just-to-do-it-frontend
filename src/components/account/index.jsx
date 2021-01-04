import React from 'react';
import { Paper, TextField, Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Account = () => {
  const classes = useStyles();
  return (
    <Paper elevation={10} style={{ backgroundColor: 'lightBlue' }}>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Typography color="inherit" variant="h5">
          Change Your Password Here
        </Typography>
        <TextField
          variant="outlined"
          size="medium"
          margin="normal"
          fullWidth
          label="Email"
        ></TextField>
        <TextField
          variant="outlined"
          size="medium"
          margin="normal"
          fullWidth
          label="Old Password"
          type="password"
        ></TextField>
        <TextField
          variant="outlined"
          size="medium"
          margin="normal"
          fullWidth
          label="New Password"
          type="password"
        ></TextField>
        <TextField
          variant="outlined"
          size="medium"
          margin="normal"
          fullWidth
          label="Confirm New Password"
          type="password"
        ></TextField>
      </Grid>
    </Paper>
  );
};

export default Account;
