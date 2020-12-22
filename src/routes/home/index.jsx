import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import MiniDrawer from '../../components/navigation';
import Todo from '../../components/todo';
import { useStyles } from './styles';

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <Todo title="hello" completed={true} />
      </div>
      <Fab
        size="medium"
        className={classes.floatingActionBtn}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Home;
