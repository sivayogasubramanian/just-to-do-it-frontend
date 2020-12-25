import React from 'react';
import { connect } from 'react-redux';
import EditTodoDialog from '../editTodoDialog';
import Todo from '../todo';

const TodoList = ({ todos, isDialogOpen }) => {
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
      {isDialogOpen && <EditTodoDialog />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    isDialogOpen: state.misc.dialog.isDialogOpen,
  };
};

export default connect(mapStateToProps)(TodoList);
