// React and helpers
import React from 'react';
// Components
import CustomSnackbar from '../customSnackbar';

const Error = () => {
  return (
    <CustomSnackbar
      open={true}
      message={'Something went wrong. Please refresh and try again later.'}
      severity={'error'}
    />
  );
};

export default Error;
