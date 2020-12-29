// React and helpers
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import MiniDrawer from '../../components/navigation';
import TodoList from '../../components/todoList';
// Styles
import { useStyles } from './styles';

const NextWeek = ({ todos, isDialogOpen }) => {
  const classes = useStyles();

  const todaysDate = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(todaysDate.getDate() + 7);

  const checkDate = (deadline) => {
    const deadlineDate = new Date(deadline);

    return (
      deadlineDate.getTime() >= todaysDate.getTime() &&
      deadlineDate.getTime() <= nextWeek.getTime()
    );
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

export default connect(mapStateToProps)(NextWeek);
