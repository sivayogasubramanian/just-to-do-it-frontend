// React and helpers
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import useTodo from '../../hooks/useTodo';
// Components
import MiniDrawer from '../../components/navigation';
import TodoList from '../../components/todoList';
import CardMessage from '../../components/cardMessage';
import CustomSnackbar from '../../components/customSnackbar';
// MUI Components
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
// MUI Icons
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
// Styles
import { useStyles } from './styles';

const Completed = ({ todos, isDialogOpen }) => {
  const classes = useStyles();
  const { updateTodo } = useTodo();
  const filteredTodos = todos.filter(
    (todo) => !todo.attributes.deleted && todo.attributes.completed
  );
  const handleFloatingActionClick = () => {
    setIsSnackbarOpen(true);
    filteredTodos.forEach((todo) => {
      updateTodo(todo.id, { deleted: true });
    });
  };
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const handleSnackbarClose = () => setIsSnackbarOpen(false);
  return (
    <>
      <MiniDrawer
        content={
          filteredTodos.length === 0 ? (
            <CardMessage message={'You do not have any completed todos.'} />
          ) : (
            <TodoList filteredTodos={filteredTodos} />
          )
        }
      />
      <Tooltip title="Delete All" arrow>
        <Fab
          size="medium"
          className={classes.floatingActionBtn}
          color="primary"
          aria-label="add"
          onClick={handleFloatingActionClick}
        >
          <DeleteSweepIcon />
        </Fab>
      </Tooltip>
      <CustomSnackbar
        open={isSnackbarOpen}
        message={'All Completed todos deleted!'}
        onClose={handleSnackbarClose}
      />
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

export default connect(mapStateToProps)(Completed);
