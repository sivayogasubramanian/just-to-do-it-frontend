// React and helpers
import React from 'react';
// MUI Components
import { Snackbar } from '@material-ui/core';

const TodosLoading = ({ todosLoading }) => {
  return (
    <Snackbar
      open={true}
      message="Hang on a second, we are updating your actions"
    />
  );
};

export default TodosLoading;
