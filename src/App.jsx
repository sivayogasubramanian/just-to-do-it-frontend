// React and helpers
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuardedRoute from './helpers/GuardedRoute';
import { useSelector } from 'react-redux';
// Routes
import Login from './routes/login/Login';
import Register from './routes/login/Register';
import Home from './routes/home';
import EditTodoDialog from './routes/EditTodoDialog';
import Completed from './routes/completed';
import Today from './routes/Today';
import NextWeek from './routes/NextWeek';
import Tags from './routes/tags';
import MyAccount from './routes/MyAccount';
// Styles
import './App.css';

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
          <GuardedRoute
            exact
            path="/nextweek"
            component={NextWeek}
            auth={isAuthenticated}
          />
          <GuardedRoute
            exact
            path="/tags"
            component={Tags}
            auth={isAuthenticated}
          />
          <GuardedRoute
            exact
            path="/account"
            component={MyAccount}
            auth={isAuthenticated}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
