// React and helpers
import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import useTodo from '../../hooks/useTodo';
// MUI Components
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

const TagsArray = ({ todos, todoId, saveTags }) => {
  const { updateTodo } = useTodo();

  const allTags = new Set();
  todos.map((todo) =>
    todo.attributes.tags.forEach((tag) => {
      allTags.add(tag);
    })
  );

  const tags = todos.filter((todo) => todo.id === todoId)[0].attributes.tags;
  const [newTags, setNewTags] = useState(tags);

  const handleAutocompleteChange = (event, values) => setNewTags(values);

  useLayoutEffect(() => {
    updateTodo(todoId, { tags: newTags });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveTags]);

  return (
    <>
      <p>Tags: </p>
      <Autocomplete
        multiple
        freeSolo
        autoComplete
        defaultValue={tags}
        value={newTags}
        options={[...allTags]}
        getOptionLabel={(option) => option}
        onChange={handleAutocompleteChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder="Add Tag" />
        )}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
    todoId: state.misc.dialog.todoId,
  };
};

export default connect(mapStateToProps)(TagsArray);
