import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuardedRoute from './helpers/GuardedRoute';
import Login from './routes/Login/Login';
import Register from './routes/Login/Register';
import Home from './routes/Home';
import EditTodoDialog from './routes/EditTodoDialog';
import { useSelector } from 'react-redux';
import Completed from './routes/Completed';
import Today from './routes/Today';

const App = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <GuardedRoute
            exact
            path="/home"
            component={Home}
            auth={isAuthenticated}
          />
          <GuardedRoute
            exact
            path="/home/edit"
            component={EditTodoDialog}
            auth={isAuthenticated}
          />
          <GuardedRoute
            exact
            path="/completed"
            component={Completed}
            auth={isAuthenticated}
          />
          <GuardedRoute
            exact
            path="/today"
            component={Today}
            auth={isAuthenticated}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
