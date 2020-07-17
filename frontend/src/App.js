import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact component={HomePage} path='/'></Route>
        <Route component={null} path='/projects:1'></Route>
        <Route component={null} path='/projects'></Route>
        <Route component={null} path='my_projects'></Route>
      </Switch>
    </div>
  );
}

export default App;
