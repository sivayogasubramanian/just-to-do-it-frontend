// React and helpers
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useSubtodo from '../../hooks/useSubtodo';
// MUI Components
import {
  Card,
  Checkbox,
  TextField,
  Grid,
  Grow,
  Button,
  Tooltip,
} from '@material-ui/core';
// MUI Icons
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
// Styles
import { useStyles } from './styles';

const Subtodo = ({ todoId, subTodoId, title, completed }) => {
  const classes = useStyles();
  const { destroySubtodo, updateSubtodo } = useSubtodo();
  const [taskTitle, setTaskTitle] = useState(title);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [checked, setChecked] = useState(true);
  const isSubtodoSave = useSelector((state) => state.misc.save);

  isSubtodoSave &&
    updateSubtodo(todoId, subTodoId, {
      title: taskTitle,
      completed: isCompleted,
    });

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
              <Tooltip title="Mark Subtodo as Completed" arrow>
                <Checkbox
                  color="primary"
                  checked={isCompleted}
                  onClick={(e) => setIsCompleted(!isCompleted)}
                />
              </Tooltip>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <Tooltip title="Delete Subtodo" arrow>
                <Button
                  onClick={() => {
                    destroySubtodo(todoId, subTodoId);
                    setChecked(false);
                  }}
                  size="large"
                >
                  <DeleteOutlineTwoToneIcon />
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grow>
    </>
  );
};

export default Subtodo;
