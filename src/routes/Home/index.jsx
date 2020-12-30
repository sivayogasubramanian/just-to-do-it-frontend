// React and helpers
import React from 'react';
import useTodo from '../../hooks/useTodo';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import MiniDrawer from '../../components/navigation';
import TodoList from '../../components/todoList';
// MUI Components
import Fab from '@material-ui/core/Fab';
// MUI Icons
import AddIcon from '@material-ui/icons/Add';
// Styles
import { useStyles } from './styles';

const Home = ({ todos, isDialogOpen }) => {
  const classes = useStyles();
  const { createTodo } = useTodo();

  return (
    <>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <TodoList filteredTodos={todos} />
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

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
    isDialogOpen: state.misc.dialog.isDialogOpen,
  };
};

export default connect(mapStateToProps)(Home);
