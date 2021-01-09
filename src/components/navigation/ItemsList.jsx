// React and helpers
import React from 'react';
import { NavLink } from 'react-router-dom';
// MUI Components
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
// NAV Items
import { items } from './items';
// Styles
import { useStyles } from './styles';

const ItemsList = ({ closeNavDrawer }) => {
  const classes = useStyles();
  return (
    <>
      <Divider />
      <List>
        {items.map((item) => (
          <Tooltip key={item.index} title={item.text}>
            <NavLink
              exact
              to={item.path}
              activeClassName={classes.active}
              onClick={() => closeNavDrawer()}
            >
              <ListItem className={classes.listItems} button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </NavLink>
          </Tooltip>
        ))}
      </List>
    </>
  );
};

export default ItemsList;
