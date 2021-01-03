// React and helpers
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// Components
import MiniDrawer from '../../components/navigation';
import { Box, Paper, Typography, Zoom } from '@material-ui/core';
import TodoList from '../../components/todoList';
// Styles
import { useStyles } from './styles';

const Tags = ({ isDialogOpen, todos, location }) => {
  const classes = useStyles();
  const currentTag = location.props.tag;

  return (
    <>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <Zoom in={true}>
          <Paper
            variant="outlined"
            style={{ backgroundColor: 'lightBlue', margin: '20px' }}
          >
            <Box m="10px">
              <Typography variant="h5">
                Current Tag Selected: <b>{currentTag}</b>
              </Typography>
            </Box>
          </Paper>
        </Zoom>
        <TodoList
          filteredTodos={todos.filter((todo) =>
            todo.attributes.tags.includes(currentTag)
          )}
        />
      </div>
      {isDialogOpen && <Redirect to="/home/edit" />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.data,
    isDialogOpen: state.misc.dialog.isDialogOpen,
  };
};

export default connect(mapStateToProps)(Tags);
