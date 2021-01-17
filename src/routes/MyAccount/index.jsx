// React and helpers
import React from 'react';
// Components
import MiniDrawer from '../../components/navigation';
import Account from '../../components/account';

const MyAccount = () => {
  return <MiniDrawer content={<Account />} />;
};

export default MyAccount;
