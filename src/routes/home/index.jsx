import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import React, { useEffect } from 'react';
import MiniDrawer from '../../components/navigation';
import Todo from '../../components/todo';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { fetchTodos } from '../../redux/actions/todosActions';

const Home = ({ todos, fetchTodos }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <MiniDrawer />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        {todos.data.map((todo) => (
          <Todo
            key={todo.id}
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
