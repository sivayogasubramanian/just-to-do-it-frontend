// React and helpers
import React from 'react';
// Components
import MiniDrawer from '../../components/navigation';
import Account from '../../components/account';
// Styles
import { useStyles } from './styles';

const MyAccount = () => {
  const classes = useStyles();

  return (
    <>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <Account />
      </div>
    </>
  );
};

export default MyAccount;
