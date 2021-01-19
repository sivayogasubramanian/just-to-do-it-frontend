// React and helpers
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuardedRoute from './helpers/GuardedRoute';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
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
import RecentlyDeleted from './routes/RecentlyDeleted';
// Styles
import './App.css';
import light from './theme/light';
import dark from './theme/dark';

const App = ({ isAuthenticated, currentTheme }) => {
  const theme = currentTheme === 'dark' ? dark : light;
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
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
            <GuardedRoute
              exact
              path="/deleted"
              component={RecentlyDeleted}
              auth={isAuthenticated}
            />
            <GuardedRoute path="/" component={Home} auth={isAuthenticated} />
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    currentTheme: state.currentTheme,
  };
};

export default connect(mapStateToProps)(App);
