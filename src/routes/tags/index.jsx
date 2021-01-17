// React and helpers
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import MiniDrawer from '../../components/navigation';
import CardMessage from '../../components/cardMessage';
import TodoList from '../../components/todoList';

const Tags = ({ isDialogOpen, todos, currentTag }) => {
  const filteredTodos = todos.filter(
    (todo) =>
      !todo.attributes.deleted && todo.attributes.tags.includes(currentTag)
  );
  return (
    <>
      <MiniDrawer
        content={
          <>
            <CardMessage
              message={
                <>
                  Current Tag Selected: <b>{currentTag}</b>
                </>
              }
            />
            <TodoList filteredTodos={filteredTodos} />
          </>
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
    currentTag: state.misc.tag,
  };
};

export default connect(mapStateToProps)(Tags);
