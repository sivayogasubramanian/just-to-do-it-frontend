// React and helpers
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useTodo from '../../hooks/useTodo';
import useSubtodo from '../../hooks/useSubtodo';
import { connect } from 'react-redux';
// Components
import TagsArray from '../../components/tagsArray';
import Subtodo from '../../components/subtodo';
// MUI Components
import { CircularProgress, Zoom } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// MUI Icons
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import SaveIcon from '@material-ui/icons/Save';
// Date Utils
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
// Actions
import { closeDialog } from '../../redux/actions/miscActions';
// Styles
import { useStyles } from './styles';

const EditTodoDialog = ({
  todos,
  allSubtodos,
  isDialogOpen,
  todoId,
  closeDialog,
  isLoading,
}) => {
  const classes = useStyles();
  const { updateTodo } = useTodo();
  const { createSubtodo } = useSubtodo();

  const [loading, setLoading] = useState(false);

  const todo = todos.filter((todo) => todo.id === todoId)[0];

  const subtodos = allSubtodos
    .filter((subtodo) => subtodo.attributes.todo_id === parseInt(todoId))
    .sort((a, b) => (a.id > b.id ? 1 : -1));

  const [saveClicked, setSaveClicked] = useState(false);

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
          <p>Todo:</p>
          <TextField
            fullWidth
            label="Todo"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <br />
          <br />
          <p>Description:</p>
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
          <TagsArray saveTags={saveClicked} />
          <p>Subtodos:</p>
          {subtodos.map((subtodo) => (
            <Subtodo
              key={subtodo.id}
              todoId={todoId}
              subTodoId={subtodo.id}
              title={subtodo.attributes.title}
              completed={subtodo.attributes.completed}
              saveSubtodos={saveClicked}
            />
          ))}
          <Button
            onClick={() => createSubtodo(todoId)}
            fullWidth
            variant="outlined"
            size="large"
            className={classes.addBtn}
          >
            Add Subtodo
          </Button>
        </DialogContent>
        <DialogActions>
          {(isLoading || loading) && <CircularProgress />}
          <Button
            onClick={() => {
              setLoading(true);
              updateTodo(todoId, { completed: true });
              setTimeout(() => {
                setLoading(false);
                closeDialog();
              }, 1000);
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
              setSaveClicked(true);
              setLoading(true);
              updateTodo(todoId, {
                title: taskTitle,
                description: desc,
                deadline: format(selectedDate, 'yyyy-MM-dd HH:mm:ss'),
              });
              setTimeout(() => {
                setLoading(false);
                setSaveClicked(false);
                closeDialog();
              }, 3000);
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
    isLoading: state.misc.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeDialog: () => dispatch(closeDialog()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoDialog);
