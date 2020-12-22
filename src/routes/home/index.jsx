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
    </div>
  );
};

export default Home;
