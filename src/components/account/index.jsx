// React and helpers
import React, { useState } from 'react';
import { connect } from 'react-redux';
// Components
import ChangePasswordForm from './ChangePasswordForm';
import Success from './Success';
import Error from './Error';
import DeleteAccountDialog from './DeleteAccountDialog';
// MUI Components
import { Paper, Grid, Typography, Slide, Button } from '@material-ui/core';
import CircleLoader from 'react-spinners/CircleLoader';
// Styles
import { useStyles } from './styles';

const Account = ({ userId, username, loading, success, errorMsg }) => {
  const classes = useStyles();

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDeleteButton = () => setIsDeleteDialogOpen(true);

  return (
    <>
      <Slide in={true} direction="left" timeout={150}>
        <Paper variant="outlined" className={classes.paper}>
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
            <ChangePasswordForm userId={userId} />
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              color="secondary"
              onClick={handleDeleteButton}
            >
              Delete Account
            </Button>
            {loading && (
              <CircleLoader
                size={50}
                color="#240971"
                className={classes.loader}
              />
            )}
          </Grid>
          {errorMsg && <Error errorMsg={errorMsg} />}
          {success && <Success />}
        </Paper>
      </Slide>
      <DeleteAccountDialog
        userId={userId}
        open={isDeleteDialogOpen}
        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
      />
    </>
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
