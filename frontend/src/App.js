import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Projects from './pages/projects/projects.component';
import Authentication from './pages/authentication/authentication.component';
import './App.css';

function App() {
  var user = null;

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact component={HomePage} path='/'></Route>
        <Route component={null} path='/projects:1'></Route>
        <Route component={Projects} path='/projects'></Route>
        <Route component={null} path='my_projects'></Route>
        <Route
          render={() =>
            user?
              (<Redirect to="/"></Redirect>)
            :
              (<Authentication></Authentication>)
          }
          path='/signin'
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
