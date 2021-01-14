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
import Tooltip from '@material-ui/core/Tooltip';
// MUI Icons
import AddIcon from '@material-ui/icons/Add';
// Styles
import { useStyles } from './styles';

const Home = ({ todos, isDialogOpen }) => {
  const classes = useStyles();
  const { createTodo } = useTodo();
  const filteredTodos = todos.filter((todo) => !todo.attributes.deleted);

  const handleFloatingBtnClick = () => createTodo();

  return (
    <>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <TodoList filteredTodos={filteredTodos} />
      </div>
      <Tooltip title="Add Todo" arrow>
        <Fab
          size="medium"
          className={classes.floatingActionBtn}
          color="primary"
          aria-label="add"
          onClick={handleFloatingBtnClick}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
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
