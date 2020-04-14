import React from 'react';
import { Main } from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { ProfileView } from './components/ProfileView';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import { AuthProvider } from './config/Auth';
import PrivateRoute from './config/PrivateRoute';

function App() {

  return (
    <AuthProvider>
      <Router>
        <div>
            <PrivateRoute exact path='/' component={Main} />
            <Route exact path='/login' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/profile' component={ProfileView} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
