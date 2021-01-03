// React and helpers
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import MiniDrawer from '../../components/navigation';
import TodoList from '../../components/todoList';
// Date Functions
import { isToday } from 'date-fns';
// Styles
import { useStyles } from './styles';

const Today = ({ todos, isDialogOpen }) => {
  const classes = useStyles();

  const checkDate = (deadline) => {
    const deadlineDate = new Date(deadline);
    return isToday(deadlineDate);
  };

  return (
    <>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <TodoList
          filteredTodos={todos.filter(
            (todo) =>
              todo.attributes.deadline !== null &&
              checkDate(todo.attributes.deadline)
          )}
        />
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

export default connect(mapStateToProps)(Today);
