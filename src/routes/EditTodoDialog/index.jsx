import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
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
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { closeDialog } from '../../redux/actions/miscActions';
// Styles
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { Zoom } from '@material-ui/core';
import useTodo from '../../hooks/useTodo';
import Subtodo from '../../components/subtodo';

const EditTodoDialog = ({
  todos,
  allSubtodos,
  isDialogOpen,
  todoId,
  closeDialog,
}) => {
  const classes = useStyles();
  const todo = todos.filter((todo) => todo.id === todoId)[0];
  const subtodos = allSubtodos.filter(
    (subtodo) => subtodo.attributes.todo_id === parseInt(todoId)
  );

  const [taskTitle, setTaskTitle] = useState(
    todo !== undefined ? todo.attributes.title : ''
  );

  const [desc, setDesc] = useState(
    todo !== undefined ? todo.attributes.description : ''
  );

  const [selectedDate, setSelectedDate] = useState(
    todo !== undefined
      ? todo.attributes.deadline !== null
        ? new Date(todo.attributes.deadline)
        : new Date()
      : new Date()
  );

  const { updateTodo } = useTodo();

  const handleDateChange = (date) => setSelectedDate(date);

  return (
    <>
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
            rows={3}
            variant="filled"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <br />
          <br />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              margin="normal"
              label="Due on (date)"
              format="dd/MM/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              disablePast
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <DialogContentText>Tags</DialogContentText>
          {subtodos.map((subtodo) => (
            <Subtodo
              key={subtodo.id}
              subTodoId={subtodo.id}
              title={subtodo.attributes.title}
              completed={subtodo.attributes.completed}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              updateTodo(todoId, { completed: true });
              setTimeout(() => {
                closeDialog();
              }, 500);
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
          <Button
            onClick={() => {
              updateTodo(todoId, {
                title: taskTitle,
                description: desc,
                deadline: format(selectedDate, 'yyyy-MM-dd HH:mm:ss'),
              });
              setTimeout(() => {
                closeDialog();
              }, 500);
            }}
            size="small"
            startIcon={<SaveIcon />}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {!isDialogOpen && <Redirect to="/home" />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
    allSubtodos: state.todos.included,
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
