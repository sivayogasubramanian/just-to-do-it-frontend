// React and helpers
import React from 'react';
import useAuth from '../../hooks/useAuth';
// Components
import DeleteAccountMessage from './DeleteAccountMessage';
// MUI Components
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core';

const DeleteAccountDialog = ({ userId, open, setIsDeleteDialogOpen }) => {
  const { deleteAccount } = useAuth();
  return (
    <Dialog open={open}>
      <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
      <DialogContent>
        <DeleteAccountMessage />
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
