import React from 'react';
import { connect } from 'react-redux';
import Todo from '../todo';

const TodoList = ({ todos }) => {
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
