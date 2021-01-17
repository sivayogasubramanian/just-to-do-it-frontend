// React and helpers
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import MiniDrawer from '../../components/navigation';
import TodoList from '../../components/todoList';
import CardMessage from '../../components/cardMessage';
// Date Functions
import { isToday } from 'date-fns';

const Today = ({ todos, isDialogOpen }) => {
  const checkDate = (deadline) => isToday(new Date(deadline));
  const filteredTodos = todos.filter(
    (todo) =>
      !todo.attributes.deleted &&
      todo.attributes.deadline !== null &&
      checkDate(todo.attributes.deadline)
  );
  return (
    <>
      <MiniDrawer
        content={
          filteredTodos.length === 0 ? (
            <CardMessage
              message={'Great! You do not have any todos due today!'}
            />
          ) : (
            <TodoList filteredTodos={filteredTodos} />
          )
        }
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

export default connect(mapStateToProps)(Today);
