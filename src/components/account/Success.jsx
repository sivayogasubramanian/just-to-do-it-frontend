// React
import React from 'react';
// MUI Components
import { Alert } from '@material-ui/lab';

const Success = () => {
  return (
    <>
      <Alert variant="outlined" severity="success" color="success">
        Password Updated Successfully!
      </Alert>
      <br />
    </>
  );
};

export default Success;
