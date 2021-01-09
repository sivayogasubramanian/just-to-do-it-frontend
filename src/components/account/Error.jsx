// React and helpers
import React from 'react';
// MUI Components
import { Typography } from '@material-ui/core';
// MUI Icons
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const Error = ({ errorMsg }) => {
  return (
    <>
      <ErrorOutlineIcon color="error" fontSize="small" />
      {errorMsg.error ? (
        <Typography variant="h6" color="error">
          Your email and/or old password is wrong. Please Try again.
        </Typography>
      ) : (
        errorMsg.map((error, index) => (
          <Typography key={index} variant="h6" color="error">
            {error}
          </Typography>
        ))
      )}
      <br />
    </>
  );
};

export default Error;
