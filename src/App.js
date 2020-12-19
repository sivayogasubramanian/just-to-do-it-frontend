import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './routes/login/Login';
import Register from './routes/login/Register';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
