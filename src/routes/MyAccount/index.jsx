// React and helpers
import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(MyAccount);
