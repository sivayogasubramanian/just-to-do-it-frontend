import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './routes/login/Login';
import Register from './routes/login/Register';
import MiniDrawer from './components/navbar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/navbar" component={MiniDrawer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
