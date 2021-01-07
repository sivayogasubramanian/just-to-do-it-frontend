// React and helpers
import React from 'react';
// MUI Components
import { Alert } from '@material-ui/lab';

const Error = () => {
  return (
    <>
      <br />
      <Alert variant="outlined" severity="error" color="error">
        Something went wrong. Please refresh and try again later.
      </Alert>
    </>
  );
};

export default Error;
