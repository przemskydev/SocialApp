import React from 'react';
import { Main } from './components/Main'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/'>
            <SignIn />
          </Route>
          <Route path='/register'>
            <SignUp />
          </Route>
          <Route path='/home'>
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
