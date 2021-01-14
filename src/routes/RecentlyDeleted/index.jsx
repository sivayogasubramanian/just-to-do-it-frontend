// React and helpers
import React from 'react';
import useTodo from '../../hooks/useTodo';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import MiniDrawer from '../../components/navigation';
import TodoList from '../../components/todoList';
import CardMessage from '../../components/cardMessage';
// MUI Components
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
// MUI Icons
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// Styles
import { useStyles } from './styles';

const RecentlyDeleted = ({ todos, isDialogOpen }) => {
  const classes = useStyles();
  const { destroyTodo } = useTodo();
  const filteredTodos = todos.filter((todo) => todo.attributes.deleted);

  const handleFloatingBtnClick = () =>
    filteredTodos.forEach((todo) => {
      destroyTodo(todo.id);
    });

  return (
    <>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        {filteredTodos.length === 0 ? (
          <CardMessage message={'Your Recently Deleted is Empty'} />
        ) : (
          <TodoList filteredTodos={filteredTodos} />
        )}
      </div>
      <Tooltip title="Delete Forever" arrow>
        <Fab
          size="medium"
          className={classes.floatingActionBtn}
          color="primary"
          aria-label="add"
          onClick={handleFloatingBtnClick}
        >
          <DeleteForeverIcon />
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

export default connect(mapStateToProps)(RecentlyDeleted);
