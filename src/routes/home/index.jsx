// React and helpers
import React from 'react';
import useTodo from '../../hooks/useTodo';
import { connect } from 'react-redux';
// Components
import MiniDrawer from '../../components/navigation';
import Todo from '../../components/todo';
// Actions
import { fetchTodos } from '../../redux/actions/todosActions';
// MUI Components
import Fab from '@material-ui/core/Fab';
// MUI Icons
import AddIcon from '@material-ui/icons/Add';
// Styles
import { useStyles } from './styles';

const Home = ({ todos, fetchTodos }) => {
  const classes = useStyles();
  const { createTodo } = useTodo();

  return (
    <div>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        {todos.data.map((todo) => (
          <Todo
            key={todo.id}
            todoId={todo.id}
            title={todo.attributes.title}
            completed={todo.attributes.completed}
          />
        ))}
      </div>
      <Fab
        size="medium"
        className={classes.floatingActionBtn}
        color="primary"
        aria-label="add"
        onClick={() => createTodo()}
        disableTouchRipple={true}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
