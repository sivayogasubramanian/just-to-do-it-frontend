// React and helpers
import React from 'react';
import useAuth from '../../hooks/useAuth';
// MUI Components
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@material-ui/core';

const DeleteAccountDialog = ({ userId, open, setIsDeleteDialogOpen }) => {
  const { deleteAccount } = useAuth();
  return (
    <Dialog open={open}>
      <DialogTitle>
        <Typography variant="h4">Are you sure?</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          This action <b>cannot be undone.</b>
          <br />
          <br />
          All your data on Just-To-do-it will be deleted and cannot be
          recovered.
          <br />
          <br />
          Please consider your action carefully before making a decision.
          <br />
          <br />
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setIsDeleteDialogOpen(false)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => deleteAccount(userId)}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAccountDialog;
