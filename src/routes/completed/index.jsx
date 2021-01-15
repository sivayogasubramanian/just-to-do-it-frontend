// React and helpers
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import MiniDrawer from '../../components/navigation';
import TodoList from '../../components/todoList';
import CardMessage from '../../components/cardMessage';
// Styles
import { useStyles } from './styles';

const Completed = ({ todos, isDialogOpen }) => {
  const classes = useStyles();
  const filteredTodos = todos.filter(
    (todo) => !todo.attributes.deleted && todo.attributes.completed
  );
  return (
    <>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        {filteredTodos.length === 0 ? (
          <CardMessage message={'You do not have any completed todos.'} />
        ) : (
          <TodoList filteredTodos={filteredTodos} />
        )}
      </div>
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
