// React and helpers
import React from 'react';
import useTodo from '../../hooks/useTodo';
// MUI Components
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Divider,
} from '@material-ui/core';

const DeleteForeverDialog = ({
  filteredTodos,
  open,
  setIsConfirmationDialogOpen,
}) => {
  const { destroyTodo } = useTodo();

  const handleCancelClick = () => setIsConfirmationDialogOpen(false);

  const handleConfirmClick = () => {
    filteredTodos.forEach((todo) => {
      destroyTodo(todo.id);
    });
    setIsConfirmationDialogOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>
        Are you sure you want to permanently delete all your todos?
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Typography variant="body1">
          This action <b>cannot be undone.</b>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary" onClick={handleCancelClick}>
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

export default DeleteForeverDialog;
