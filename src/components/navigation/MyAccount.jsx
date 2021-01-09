// React and helpers
import React from 'react';
import { NavLink } from 'react-router-dom';
// MUI Components
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
// MUI Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// Styles
import { useStyles } from './styles';

const MyAccount = () => {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <Tooltip title="My Account">
        <NavLink exact to="/account" activeClassName={classes.active}>
          <ListItem className={classes.listItems} button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="My Account" />
          </ListItem>
        </NavLink>
      </Tooltip>
    </>
  );
};

export default MyAccount;
