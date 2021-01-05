// React and helpers
import React, { useState } from 'react';
import { connect } from 'react-redux';
import useTodo from '../../hooks/useTodo';
// MUI Components
import { Button, Grid, TextField, Chip, Paper } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
// Actions
import { setErrorMsg, toggleError } from '../../redux/actions/miscActions';
// Styles
import useStyles from './styles';

const TagsArray = ({
  todos,
  todoId,
  isSubtodoSave,
  errorMsg,
  isError,
  toggleError,
  setErrorMsg,
}) => {
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
        <Grid item xs={7}>
          <TextField
            fullWidth
            label="Add New Tag"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          />
        </Grid>
        <Grid item xs={5}>
          <Button
            onClick={() => {
              if (newTag) {
                setChipData((chips) => [...chips, newTag.toUpperCase()]);
                setNewTag('');
              } else {
                toggleError();
                setErrorMsg('Please type something before adding a tag.');
                setTimeout(() => {
                  toggleError();
                  setErrorMsg('');
                }, 3000);
              }
            }}
            fullWidth
            variant="outlined"
          >
            Add tag
          </Button>
        </Grid>
      </Grid>
      {isError && (
        <>
          <br />
          <Alert variant="outlined" severity="error" color="error">
            {errorMsg}
          </Alert>
        </>
      )}
      <br />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
    todoId: state.misc.dialog.todoId,
    isSubtodoSave: state.misc.save,
    isError: state.misc.error,
    errorMsg: state.misc.errorMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleError: () => dispatch(toggleError()),
    setErrorMsg: (msg) => dispatch(setErrorMsg(msg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsArray);
