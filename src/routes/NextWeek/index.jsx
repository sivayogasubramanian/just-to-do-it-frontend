// React and helpers
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import MiniDrawer from '../../components/navigation';
import TodoList from '../../components/todoList';
import CardMessage from '../../components/cardMessage';
// Date Functions
import { isThisWeek } from 'date-fns';
// Styles
import { useStyles } from './styles';

const NextWeek = ({ todos, isDialogOpen }) => {
  const classes = useStyles();

  const checkDate = (deadline) => isThisWeek(new Date(deadline));
  const filteredTodos = todos.filter(
    (todo) =>
      !todo.attributes.deleted &&
      todo.attributes.deadline !== null &&
      checkDate(todo.attributes.deadline)
  );
  return (
    <>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        {filteredTodos.length === 0 ? (
          <CardMessage
            message={'Great! You do not have any todos due this week!'}
          />
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

export default connect(mapStateToProps)(NextWeek);
