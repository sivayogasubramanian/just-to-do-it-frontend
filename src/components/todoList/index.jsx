// React and helpers
import React from 'react';
import { connect } from 'react-redux';
// Components
import Todo from '../todo';
import Error from './Error';
import CardMessage from '../cardMessage';
import Search from '../../components/search';
// MUI Components
import LinearProgress from '@material-ui/core/LinearProgress';
// Date Utils
import 'date-fns';
// Styles
import { useStyles } from './styles';
import { isAfter, isBefore } from 'date-fns';

const TodoList = ({
  searchTitle,
  searchTags,
  searchDateFrom,
  searchDateTo,
  filteredTodos,
  isError,
  isSearchActive,
  isLoading,
  todosLoading,
}) => {
  const classes = useStyles();
  let searchFilterTodos = filteredTodos;

  if (
    searchTitle === '' &&
    searchTags.length === 0 &&
    searchDateFrom === '' &&
    searchDateTo === ''
  ) {
    searchFilterTodos = filteredTodos;
  } else if (
    searchTags.length === 0 &&
    searchDateFrom === '' &&
    searchDateTo === ''
  ) {
    searchFilterTodos = filteredTodos.filter((todo) =>
      todo.attributes.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
  } else if (
    searchTitle === '' &&
    searchDateFrom === '' &&
    searchDateTo === ''
  ) {
    searchFilterTodos = filteredTodos.filter((todo) =>
      searchTags.every((tag) => todo.attributes.tags.includes(tag))
    );
  } else {
    searchFilterTodos = filteredTodos.filter((todo) => {
      const todoDeadline = new Date(todo.attributes.deadline);
      return (
        isAfter(todoDeadline, new Date(searchDateFrom)) &&
        isBefore(todoDeadline, new Date(searchDateTo))
      );
    });
  }

  return (
    <>
      {filteredTodos.length !== 0 && <Search />}
      {filteredTodos.length === 0 && (
        <CardMessage
          message={
            'Your Todo list is empty. Add a new Todo by clicking the add button below'
          }
        />
      )}
      {searchFilterTodos.length === 0 && isSearchActive && (
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
      {(isLoading || todosLoading) && (
        <LinearProgress className={classes.loader} />
      )}
      {isError && <Error />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isError: state.misc.error,
    isLoading: state.misc.loading,
    todosLoading: state.todos.todosLoading,
    isSearchActive: state.search.isSearchActive,
    searchTitle: state.search.title,
    searchTags: state.search.tags,
    searchDateFrom: state.search.date.from,
    searchDateTo: state.search.date.to,
  };
};

export default connect(mapStateToProps)(TodoList);
