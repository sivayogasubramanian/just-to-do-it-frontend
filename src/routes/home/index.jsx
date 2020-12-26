// React and helpers
import React from 'react';
import useTodo from '../../hooks/useTodo';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
// Components
import MiniDrawer from '../../components/navigation';
import TodoList from '../../components/todoList';
// MUI Components
import Fab from '@material-ui/core/Fab';
// MUI Icons
import AddIcon from '@material-ui/icons/Add';
// Styles
import { useStyles } from './styles';

const Home = () => {
  const classes = useStyles();
  const { createTodo } = useTodo();
  const isDialogOpen = useSelector((state) => state.misc.dialog.isDialogOpen);

  return (
    <>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <TodoList />
      </div>
      <Fab
        size="medium"
        className={classes.floatingActionBtn}
        color="primary"
        aria-label="add"
        onClick={() => createTodo()}
      >
        <AddIcon />
      </Fab>
      {isDialogOpen && <Redirect to="/home/edit" />}
    </>
  );
};

export default Home;
