import React from 'react'
import '../style/main.css';
import {AuthProvider} from '../config/auth'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../views/home';
import Dash from "../views/dashboard";
import Login from './login';
import Signup from "./signup";
import PrivateRoute from './PrivateRoute';

const App = () => {
  return(
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/dashboard" component={Dash} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
