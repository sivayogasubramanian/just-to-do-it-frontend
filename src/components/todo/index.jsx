// React and helpers
import React, { useState, useEffect } from 'react';
import useTodo from '../../hooks/useTodo';
import { connect } from 'react-redux';
import clsx from 'clsx';
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';
// Actions
import { openDialog } from '../../redux/actions/miscActions';
// Components
import CustomSnackbar from '../customSnackbar';
// MUI Components
import {
  Card,
  Checkbox,
  TextField,
  Grid,
  IconButton,
  Button,
  Slide,
  Tooltip,
  Collapse,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';
// MUI Icons
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
import SaveIcon from '@material-ui/icons/Save';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Date Utils
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { isBefore } from 'date-fns';
// Styles
import { useStyles, textFieldInputProps } from './styles';

const Todo = ({ todos, todoId, title, completed, deleted, openDialog }) => {
  const classes = useStyles();
  const { updateTodo } = useTodo();

  const todo = todos.filter(
    (todo) => !todo.attributes.deleted && todo.id === todoId
  )[0];
  const currentDate = new Date();

  const [taskTitle, setTaskTitle] = useState(title);
  const [isCompleted, setIsCompleted] = useState(completed);
  const [checked, setChecked] = useState(true);
  const [isOverdue, setIsOverdue] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [isExtraMenuOpen, setIsExtraMenuOpen] = useState(false);
  const [taskEdited, setTaskEdited] = useState(false);

  const setDate = () => {
    if (todo !== undefined) {
      if (todo.attributes.deadline !== null) {
        return new Date(todo.attributes.deadline);
      }
    }
    return currentDate;
  };

  const checkDate = () => {
    if (isBefore(selectedDate, currentDate)) {
      setIsOverdue(true);
    } else {
      setIsOverdue(false);
    }
  };
  const [selectedDate, setSelectedDate] = useState(setDate());
  const handleSnackBar = () => setIsSnackbarOpen(false);

  // Button Handlers
  const onSaveClick = () => {
    setIsSnackbarOpen(true);
    setTaskEdited(false);
    updateTodo(todoId, {
      title: taskTitle,
      completed: isCompleted,
      deadline: selectedDate,
    });
  };

  const onEditClick = () => {
    openDialog({ isDialogOpen: true, todoId: todoId });
  };

  const onDeleteClick = () => {
    setChecked(false);
    updateTodo(todoId, {
      deleted: true,
    });
  };

  const handleExtraMenuClick = () => {
    setIsExtraMenuOpen(!isExtraMenuOpen);
  };

  const onRestoreClick = () => {
    updateTodo(todoId, {
      deleted: false,
    });
  };

  const onKeyPress = (e) => {
    const keycode = e.charCode || e.keycode;
    if (keycode === 13) {
      onSaveClick();
    }
  };

  const handleDateChange = (date) => setSelectedDate(date);

  const handleEventListener = (e) => {
    if (taskEdited) {
      onSaveClick();
    }
  };

  useDidUpdateEffect(() => {
    onSaveClick();
    checkDate();
  }, [isCompleted, selectedDate]);

  useEffect(() => {
    checkDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleEventListener);
    return () => {
      document.removeEventListener('click', handleEventListener);
    };
  });

  return (
    <>
      <Slide
        direction="left"
        in={checked}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 150, exit: 150 }}
      >
        <Card
          variant="outlined"
          className={clsx(classes.card, {
            [classes.cardCompleted]: isCompleted,
            [classes.overdue]: isOverdue && !isCompleted,
            [classes.cardInComplete]: !isCompleted && !isOverdue,
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
                  onChange={() => setIsCompleted(!isCompleted)}
                />
              </Tooltip>
            </Grid>
            <Grid item xs={10}>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
              >
                <Grid item xs={11}>
                  <TextField
                    inputProps={textFieldInputProps}
                    placeholder="Press Enter to Save"
                    fullWidth
                    value={taskTitle}
                    onChange={(e) => {
                      setTaskTitle(e.target.value);
                      setTaskEdited(true);
                    }}
                    onKeyPress={onKeyPress}
                  />
                </Grid>
                <Grid item xs={1} />
                {deleted ? (
                  <>
                    <Grid item xs={11}>
                      <Button
                        size="large"
                        onClick={onRestoreClick}
                        startIcon={<RestoreFromTrashIcon />}
                      >
                        Restore Todo
                      </Button>
                    </Grid>
                    <Grid item xs={1} />
                  </>
                ) : (
                  <>
                    <Grid item xs={3}>
                      <Tooltip title="Save Todo" arrow>
                        <Button onClick={onSaveClick}>
                          <SaveIcon />
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid item xs={3}>
                      <Tooltip title="Edit Todo" arrow>
                        <Button onClick={onEditClick} size="large">
                          <EditTwoToneIcon />
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid item xs={3}>
                      <Tooltip title="Delete Todo" arrow>
                        <Button size="large" onClick={onDeleteClick}>
                          <DeleteOutlineTwoToneIcon />
                        </Button>
                      </Tooltip>
                    </Grid>
                    <Grid item xs={3}>
                      <Tooltip title="More Info" arrow>
                        <IconButton
                          className={clsx(classes.expand, {
                            [classes.expandOpen]: isExtraMenuOpen,
                          })}
                          color="inherit"
                          onClick={handleExtraMenuClick}
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Collapse in={isExtraMenuOpen} timeout="auto" unmountOnExit>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item xs={2} />
                <Grid item xs={4}>
                  <KeyboardDatePicker
                    minDateMessage={'This todo is overdue'}
                    fullWidth
                    margin="normal"
                    label="Due on (date)"
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    disablePast
                  />
                </Grid>
                <Grid item xs={4}>
                  <KeyboardTimePicker
                    fullWidth
                    margin="normal"
                    label="Due on (time)"
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </MuiPickersUtilsProvider>
          </Collapse>
        </Card>
      </Slide>
      <CustomSnackbar
        open={isSnackbarOpen}
        onClose={handleSnackBar}
        message={'Changes Updated Successfully!'}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDialog: (payload) => dispatch(openDialog(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
