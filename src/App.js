import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GuardedRoute from './helpers/GuardedRoute';
import Login from './routes/login/Login';
import Register from './routes/login/Register';
import MiniDrawer from './components/navigation';
import Todo from './components/todo';
import Home from './routes/home';
import { useState } from 'react';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <GuardedRoute
            exact
            path="/navigation"
            component={MiniDrawer}
            auth={isAuthenticated}
          />
          <GuardedRoute
            exact
            path="/todo"
            component={Todo}
            auth={isAuthenticated}
          />
          <GuardedRoute
            exact
            path="/home"
            component={Home}
            auth={isAuthenticated}
          />
          <Route exact path="*" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
