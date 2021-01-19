// React and helpers
import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import useAuth from '../../hooks/useAuth';
import { connect } from 'react-redux';
// Actions
import { setTheme } from '../../redux/actions/themeActions';
// Components
import CustomToggle from './toggle';
// MUI Components
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
import { Tooltip } from '@material-ui/core';

function MiniDrawer({ content, currentTheme, setTheme }) {
  const classes = useStyles();
  const theme = useTheme();
  const { logOut } = useAuth();
  const [open, setOpen] = useState(false);

  const darkModeToggleState = currentTheme === 'dark';
  const handleDarkModeToggle = () => {
    if (darkModeToggleState) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

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
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Just To-do it
          </Typography>
          <Box flexGrow={1} />
          <Tooltip arrow title="Toggle Dark Mode" placement="left">
            <CustomToggle
              checked={darkModeToggleState}
              onChange={handleDarkModeToggle}
              name="darkModeToggle"
            />
          </Tooltip>
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
        <MyAccount closeNavDrawer={handleDrawerClose} />
        <ItemsList closeNavDrawer={handleDrawerClose} />
        <Tags closeNavDrawer={handleDrawerClose} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {content}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentTheme: state.currentTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (theme) => dispatch(setTheme(theme)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniDrawer);
