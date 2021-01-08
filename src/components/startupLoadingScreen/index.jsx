// React and helpers
import React from 'react';
// Components
import QuotesLoading from '../loading';
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
      <QuotesLoading loading={true} />
    </div>
  );
};

export default StartupLoadingScreen;
