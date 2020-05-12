import React from 'react';
import { Main } from './components/mainView/Main';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import { ProfileView } from './components/profileView/ProfileView';
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
        <>
          <PrivateRoute exact path='/' component={Main} />
          <Route path='/login' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/profile/:id' component={ProfileView} />
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
