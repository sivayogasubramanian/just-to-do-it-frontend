// React and helpers
import React, { useState } from 'react';
import useTodo from '../../hooks/useTodo';
import { connect } from 'react-redux';
// Actions
import { openDialog } from '../../redux/actions/miscActions';
// MUI Components
import {
  Card,
  Checkbox,
  TextField,
  Grid,
  Button,
  Slide,
} from '@material-ui/core';
// MUI Icons
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
import SaveIcon from '@material-ui/icons/Save';
// Styles
import { useStyles } from './styles';

const Todo = ({ todoId, title, completed, openDialog }) => {
  const classes = useStyles();
  const { updateTodo, destroyTodo } = useTodo();
  const [taskTitle, setTaskTitle] = useState(title);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [checked, setChecked] = useState(true);

  return (
    <>
      <Slide
        direction="right"
        in={checked}
        mountOnEnter
        timeout={{ enter: 300, exit: 300 }}
      >
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
            <Grid item xs={4}>
              <TextField
                fullWidth
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={() =>
                  updateTodo(todoId, {
                    title: taskTitle,
                    completed: isCompleted,
                  })
                }
              >
                <SaveIcon />
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={() =>
                  openDialog({ isDialogOpen: true, todoId: todoId })
                }
                size="large"
              >
                <EditTwoToneIcon />
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                size="large"
                onClick={() => {
                  setChecked(false);
                  destroyTodo(todoId);
                }}
              >
                <DeleteOutlineTwoToneIcon />
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Slide>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDialog: (payload) => dispatch(openDialog(payload)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
