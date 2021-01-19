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
  Divider,
} from '@material-ui/core';

const DeleteAccountDialog = ({ userId, open, setIsDeleteDialogOpen }) => {
  const { deleteAccount } = useAuth();
  const handleCancelClick = () => setIsDeleteDialogOpen(false);
  const handleConfirmClick = () => deleteAccount(userId);
  return (
    <Dialog open={open}>
      <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
      <Divider />
      <DialogContent>
        <DeleteAccountMessage />
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button
          autoFocus
          variant="contained"
          color="primary"
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleConfirmClick}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAccountDialog;
