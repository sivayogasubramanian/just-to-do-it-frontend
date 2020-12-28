// React and helpers
import React, { useState } from 'react';
import { connect } from 'react-redux';
import useTodo from '../../hooks/useTodo';
// MUI Components
import { Button, Grid, TextField, Chip, Paper } from '@material-ui/core';
// Styles
import useStyles from './styles';

const TagsArray = ({ todos, todoId, isSubtodoSave }) => {
  const classes = useStyles();
  const { updateTodo } = useTodo();
  const tags = todos.filter((todo) => todo.id === todoId)[0].attributes.tags;

  const [chipData, setChipData] = useState(tags);
  const [newTag, setNewTag] = useState('');

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  isSubtodoSave && updateTodo(todoId, { tags: chipData });

  return (
    <>
      <p>Tags: </p>
      {chipData.length !== 0 ? (
        <Paper component="ul" className={classes.root}>
          {chipData.map((data, index) => {
            return (
              <li key={index}>
                <Chip
                  label={data}
                  onDelete={
                    data.label === 'React' ? undefined : handleDelete(data)
                  }
                  className={classes.chip}
                />
              </li>
            );
          })}
        </Paper>
      ) : (
        <p>No tags yet</p>
      )}
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            fullWidth
            label="Add New Tag"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={() => {
              setChipData((chips) => [...chips, newTag]);
              setNewTag('');
            }}
            fullWidth
            variant="outlined"
          >
            Add tag
          </Button>
        </Grid>
      </Grid>
      <br />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
    todoId: state.misc.dialog.todoId,
    isSubtodoSave: state.misc.save,
  };
};

export default connect(mapStateToProps)(TagsArray);
