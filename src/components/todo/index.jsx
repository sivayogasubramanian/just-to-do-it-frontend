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
  Tooltip,
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

  // Button Handlers
  const onSaveClick = () => {
    updateTodo(todoId, {
      title: taskTitle,
      completed: isCompleted,
    });
  };

  const onEditClick = () => {
    openDialog({ isDialogOpen: true, todoId: todoId });
  };

  const onDeleteClick = () => {
    setChecked(false);
    destroyTodo(todoId);
  };

  const onKeyPress = (e) => {
    const keycode = e.charCode || e.keycode;
    if (keycode === 13) {
      onSaveClick();
    }
  };
  return (
    <>
      <Slide
        direction="left"
        in={checked}
        mountOnEnter
        timeout={{ enter: 300, exit: 500 }}
      >
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
            <Grid item xs={2}>
              <Tooltip title="Mark Todo as Completed">
                <Checkbox
                  color="primary"
                  checked={isCompleted}
                  onClick={(e) => setIsCompleted(!isCompleted)}
                />
              </Tooltip>
            </Grid>
            <Grid item xs={4}>
              <TextField
                placeholder="Press Enter to Save"
                autoFocus
                fullWidth
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                onKeyPress={onKeyPress}
              />
            </Grid>
            <Grid item xs={2}>
              <Tooltip title="Save Todo">
                <Button onClick={onSaveClick}>
                  <SaveIcon />
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              <Tooltip title="Edit Todo">
                <Button onClick={onEditClick} size="large">
                  <EditTwoToneIcon />
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              <Tooltip title="Delete Todo">
                <Button size="large" onClick={onDeleteClick}>
                  <DeleteOutlineTwoToneIcon />
                </Button>
              </Tooltip>
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
