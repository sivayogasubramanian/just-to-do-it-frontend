// React and helpers
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import MiniDrawer from '../../components/navigation';
import TodoList from '../../components/todoList';
// Styles
import { useStyles } from './styles';

const Today = ({ todos, isDialogOpen }) => {
  const classes = useStyles();

  const todaysDate = new Date();
  const todaysDateSqlFormat = (
    todaysDate.getFullYear() +
    '-' +
    (todaysDate.getMonth() + 1) +
    '-' +
    todaysDate.getDate()
  ).toString();

  return (
    <>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <TodoList
          filteredTodos={todos.filter(
            (todo) =>
              todo.attributes.deadline !== null &&
              todo.attributes.deadline.split('T')[0] === todaysDateSqlFormat
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
