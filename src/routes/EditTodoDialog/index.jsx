import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import SaveIcon from '@material-ui/icons/Save';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { closeDialog } from '../../redux/actions/miscActions';
// Styles
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { Zoom } from '@material-ui/core';
import useTodo from '../../hooks/useTodo';

const EditTodoDialog = ({
  taskTitle,
  setTaskTitle,
  setIsCompleted,
  todos,
  isDialogOpen,
  todoId,
  closeDialog,
}) => {
  const classes = useStyles();
  const todo = todos.filter((todo) => todo.id === todoId)[0];

  const [desc, setDesc] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { updateTodo } = useTodo();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(format(selectedDate, 'yyyy-MM-dd HH:mm:ss'));
  };

  return (
    <div>
      <Dialog
        open={isDialogOpen}
        maxWidth="lg"
        fullWidth
        className={classes.dialog}
        TransitionComponent={Zoom}
      >
        <DialogTitle>
          <EditOutlinedIcon className={classes.editIcon} />
          Edit Todo Details
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Todo"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <br />
          <br />
          <TextField
            fullWidth
            label="Description for this Todo"
            placeholder="Add a description here"
            multiline
            rows={4}
            variant="filled"
            onChange={(e) => setDesc(e.target.value)}
          />
          <br />
          <br />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-evenly" alignItems="center">
              <KeyboardDatePicker
                margin="normal"
                label="Due on (date)"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                disablePast
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <br />
              <KeyboardTimePicker
                margin="normal"
                label="Due at (time)"
                value={selectedDate}
                onChange={handleDateChange}
                disablePast
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <DialogContentText>Tags</DialogContentText>
          <DialogContentText>Subtodos</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsCompleted(true);
              updateTodo(todoId, { completed: true });
              closeDialog();
            }}
            size="small"
            startIcon={<DoneOutlineIcon />}
            color="primary"
          >
            Mark as Completed
          </Button>
          <Button
            onClick={closeDialog}
            size="small"
            startIcon={<DeleteIcon />}
            color="primary"
          >
            Discard Changes
          </Button>
          <Button size="small" startIcon={<SaveIcon />} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
    isDialogOpen: state.misc.dialog.isDialogOpen,
    todoId: state.misc.dialog.todoId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeDialog: () => dispatch(closeDialog()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoDialog);
