// React
import React from 'react';
// Components
import CustomSnackbar from '../customSnackbar';

const Success = () => {
  return (
    <CustomSnackbar open={true} message={'Password Updated Successfully!'} />
  );
};

export default Success;
