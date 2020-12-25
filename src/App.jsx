import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuardedRoute from './helpers/GuardedRoute';
import Login from './routes/login/Login';
import Register from './routes/login/Register';
import Home from './routes/home';
import { useSelector } from 'react-redux';
import EditTodoDialog from './components/editTodoDialog';

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
          <Route exact path="/edit" component={EditTodoDialog} />>
          <Route exact path="*" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
