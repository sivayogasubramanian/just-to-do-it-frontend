import React, { useState, useRef, useLayoutEffect } from 'react';
import useTodo from '../../hooks/useTodo';
import { Card, Checkbox, TextField, Grid, Button } from '@material-ui/core';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
import { useStyles } from './styles';

const Todo = ({ todoId, title, completed }) => {
  const classes = useStyles();
  const { updateTodo, destroyTodo } = useTodo();
  const firstUpdate = useRef(true);
  const [taskTitle, setTaskTitle] = useState(title);
  const [isCompleted, setIsCompleted] = useState(completed);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    updateTodo(todoId, { title: taskTitle, completed: isCompleted });
    // eslint-disable-next-line
  }, [taskTitle, isCompleted]);

  return (
    <Card raised className={classes.card}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item xs={2}>
          <Checkbox
            color="primary"
            checked={isCompleted}
            onClick={(e) => setIsCompleted(!isCompleted)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <Button>
            <EditTwoToneIcon />
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => destroyTodo(todoId)}>
            <DeleteOutlineTwoToneIcon />
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Todo;
