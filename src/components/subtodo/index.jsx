// React and helpers
import React, { useState } from 'react';
// MUI Components
import {
  Card,
  Checkbox,
  TextField,
  Grid,
  Grow,
  Button,
} from '@material-ui/core';
// MUI Icons
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
// Styles
import { useStyles } from './styles';

const Subtodo = ({ subTodoId, title, completed }) => {
  const classes = useStyles();
  // const { updateTodo, destroyTodo } = useTodo();
  const [taskTitle, setTaskTitle] = useState(title);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Grow in={checked}>
        <Card
          raised
          className={isCompleted ? classes.cardCompleted : classes.card}
        >
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={1}>
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
              <Button size="large">
                <DeleteOutlineTwoToneIcon />
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grow>
    </>
  );
};

export default Subtodo;
