// React and helpers
import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import useAuth from '../../hooks/useAuth';
// MUI Components
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// MUI Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// Nav Item/Tag Components
import MyAccount from './MyAccount';
import ItemsList from './ItemsList';
import Tags from './Tags';
// Styles
import { useStyles } from './styles';

function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const { logOut } = useAuth();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);

  const handleDrawerClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1} />
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            startIcon={<ExitToAppIcon />}
            onClick={logOut}
          >
            Log-out
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <MyAccount />
        <ItemsList closeNavDrawer={handleDrawerClose} />
        <Tags closeNavDrawer={handleDrawerClose} />
      </Drawer>
    </div>
  );
}

export default MiniDrawer;
