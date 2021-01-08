// React and helpers
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuardedRoute from './helpers/GuardedRoute';
import { connect } from 'react-redux';
// Routes
import Landing from './routes/login';
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

const App = ({ isAuthenticated }) => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
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
          <GuardedRoute path="/" component={Home} auth={isAuthenticated} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);
