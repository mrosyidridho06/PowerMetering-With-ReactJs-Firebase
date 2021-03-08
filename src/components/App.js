import React from 'react'
import '../style/main.css';
import {AuthProvider, SignInWithGoogle} from '../config/auth'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../views/home';
import Dash from "../views/dashboard";
import Login from './login';
import Signup from "./signup";
import ForgotPassword from "../components/Reset"
import PrivateRoute from './PrivateRoute';
import FloatingLabelInput from '../components/floatInput'
import Cospi from '../views/cospi'
import HomeAuto from '../views/rumah'
import tegangan from '../views/tegangan'
import Arus from '../views/arus'

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
          <PrivateRoute exact path="/dashboard" component={Dash} />
          <PrivateRoute exact path="/cospi" component={Cospi} />
          <PrivateRoute exact path="/rumah" component={HomeAuto} />
          <PrivateRoute exact path="/tegangan" component={tegangan} />
          <PrivateRoute exact path="/arus" component={Arus} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
