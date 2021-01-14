// React and helpers
import React from 'react';
import { connect } from 'react-redux';
// Components
import Todo from '../todo';
import Error from './Error';
import CardMessage from '../cardMessage';

const TodoList = ({ filteredTodos, isError }) => {
  return (
    <>
      {filteredTodos.length === 0 && (
        <CardMessage
          message={
            'Your Todo list is empty. Add a new Todo by clicking the add button below'
          }
        />
      )}
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todoId={todo.id}
          title={todo.attributes.title}
          completed={todo.attributes.completed}
          deleted={todo.attributes.deleted}
        />
      ))}
      {isError && <Error />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isError: state.misc.error,
  };
};

export default connect(mapStateToProps)(TodoList);
