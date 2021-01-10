// React and helpers
import React, { useState } from 'react';
import useTodo from '../../hooks/useTodo';
import { connect } from 'react-redux';
import clsx from 'clsx';
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
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
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
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  // Button Handlers
  const onSaveClick = () => {
    setIsSnackbarOpen(true);
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
          variant="outlined"
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
            <Grid item xs={2}>
              <Tooltip title="Mark Todo as Completed" arrow>
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
                fullWidth
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                onKeyPress={onKeyPress}
              />
            </Grid>
            <Grid item xs={2}>
              <Tooltip title="Save Todo" arrow>
                <Button onClick={onSaveClick}>
                  <SaveIcon />
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              <Tooltip title="Edit Todo" arrow>
                <Button onClick={onEditClick} size="large">
                  <EditTwoToneIcon />
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              <Tooltip title="Delete Todo" arrow>
                <Button size="large" onClick={onDeleteClick}>
                  <DeleteOutlineTwoToneIcon />
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Slide>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={1500}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={Slide}
        onClose={() => setIsSnackbarOpen(false)}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setIsSnackbarOpen(false)}
        >
          Todo Saved Successfully
        </Alert>
      </Snackbar>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDialog: (payload) => dispatch(openDialog(payload)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
