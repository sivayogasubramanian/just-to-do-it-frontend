// React and helpers
import React from 'react';
// React Spinner Component
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
// Styles
import useStyles from './styles';

const StartupLoadingScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <ClimbingBoxLoader color={'#000000'} loading={true} size={40} />
      <h2>Loading...</h2>
    </div>
  );
};

export default StartupLoadingScreen;
