import React from 'react'
import '../style/main.css';
import {AuthProvider, SignInWithGoogle} from '../config/auth'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../views/home';
import Login from './login';
import Signup from "./signup";
import ForgotPassword from "../components/Reset"
import PrivateRoute from './PrivateRoute';
import FloatingLabelInput from '../components/floatInput'
import Cospi from '../views/cospi'
import Rumah from '../views/rumah'
import tegangan from '../views/tegangan'
import Arus from '../views/arus'
import chartCospi from '../charts/chartCospi'
import dashboard from '../views/dashboard';
import Cos from '../views/cos'
import tescos from '../views/tescos';
import Account from '../views/account';

const App = () => {
  return(
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/reset" component={ForgotPassword} />
          <Route path="/input" component={FloatingLabelInput} />
          <PrivateRoute exact path="/dashboard" component={dashboard} />
          <PrivateRoute exact path="/cospi" component={Cospi} />
          <PrivateRoute exact path="/rumah" component={Rumah} />
          <PrivateRoute exact path="/tegangan" component={tegangan} />
          <PrivateRoute exact path="/arus" component={Arus} />
          <PrivateRoute exact path="/chart" component={chartCospi} />
          <PrivateRoute exact path="/cos" component={Cos} />
          <PrivateRoute exact path="/tescos" component={tescos} />
          <PrivateRoute exact path="/account" component={Account} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
