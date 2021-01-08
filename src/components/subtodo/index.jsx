// React and helpers
import React, { useEffect, useState } from 'react';
import useSubtodo from '../../hooks/useSubtodo';
import clsx from 'clsx';
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

const Subtodo = ({ todoId, subTodoId, title, completed, saveSubtodos }) => {
  const classes = useStyles();
  const { destroySubtodo, updateSubtodo } = useSubtodo();
  const [taskTitle, setTaskTitle] = useState(title);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    updateSubtodo(todoId, subTodoId, {
      title: taskTitle,
      completed: isCompleted,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveSubtodos]);

  return (
    <>
      <Grow in={checked}>
        <Card
          raised
          className={clsx(classes.card, {
            [classes.cardCompleted]: isCompleted,
            [classes.cardInComplete]: !isCompleted,
          })}
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
