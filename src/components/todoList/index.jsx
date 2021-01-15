// React and helpers
import React from 'react';
import { connect } from 'react-redux';
// Components
import Todo from '../todo';
import Error from './Error';
import CardMessage from '../cardMessage';
import Search from '../../components/search';

const TodoList = ({ searchTitle, searchTags, filteredTodos, isError }) => {
  let searchFilterTodos = filteredTodos;

  if (searchTitle === '' && searchTags.length === 0) {
    searchFilterTodos = filteredTodos;
  } else if (searchTags.length === 0) {
    searchFilterTodos = filteredTodos.filter((todo) =>
      todo.attributes.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
  } else {
    searchFilterTodos = filteredTodos.filter((todo) =>
      searchTags.every((tag) => todo.attributes.tags.includes(tag))
    );
  }

  return (
    <>
      <Search />
      {filteredTodos.length === 0 && (
        <CardMessage
          message={
            'Your Todo list is empty. Add a new Todo by clicking the add button below'
          }
        />
      )}
      {searchFilterTodos.length === 0 && (
        <CardMessage
          message={'There were no todos matching your search inputs'}
        />
      )}
      {searchFilterTodos.map((todo) => (
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
    searchTitle: state.search.title,
    searchTags: state.search.tags,
  };
};

export default connect(mapStateToProps)(TodoList);
