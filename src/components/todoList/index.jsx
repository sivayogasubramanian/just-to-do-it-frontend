import React from 'react';
import { connect } from 'react-redux';
import Todo from '../todo';
import { Alert } from '@material-ui/lab';

const TodoList = ({ todos, isError }) => {
  return (
    <>
      {todos.data.map((todo) => (
        <Todo
          key={todo.id}
          todoId={todo.id}
          title={todo.attributes.title}
          completed={todo.attributes.completed}
        />
      ))}
      {isError && (
        <>
          <br />
          <Alert variant="outlined" severity="error" color="error">
            Something went wrong. Please refresh and try again later.
          </Alert>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    isError: state.misc.error,
  };
};

export default connect(mapStateToProps)(TodoList);
