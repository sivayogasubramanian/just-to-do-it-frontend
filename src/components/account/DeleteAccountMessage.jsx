// React and helpers
import React from 'react';
// MUI Components
import { Typography } from '@material-ui/core';

const DeleteAccountMessage = () => {
  return (
    <Typography variant="body1">
      This action <b>cannot be undone.</b>
      <br />
      <br />
      All your data on Just-To-do-it will be deleted and cannot be recovered.
      <br />
      <br />
      <b>Please consider your action carefully before making a decision.</b>
      <br />
      <br />
    </Typography>
  );
};

export default DeleteAccountMessage;
