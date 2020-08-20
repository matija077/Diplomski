import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Projects from './pages/projects/projects.component';
import ProjectDetails from './components/projectDetails/projectDetails.component';
import Authentication from './pages/authentication/authentication.component';
import './App.css';

import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      user: null
    }

    this.setUser = this.setUser.bind(this)
  }

  setUser(user) {
    fetch(`/users/${user}`, {
      method: 'get',
      headers: {'Content-Type': 'application/json'},
    })
    .then(function resolved(response) {
      return response.json();
    })
    .then(function jsonData(data) {
      this.props.setCurrentUser(data, user)
    }.bind(this))
    .catch(function rejected(error) {
      console.log(error);
    })
  }

  render() {
    var {user} = this.state;
    console.log(this.props.currentUser);

    return (
      <div>
        <Header setUser={this.setUser}></Header>
        <Switch>
          <Route exact component={HomePage} path='/'></Route>
          <Route component={ProjectDetails} path='/projects/:projectID'></Route>
          <Route
            path='/projects'
            component={Projects}
          >
          </Route>
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
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (user, userNumber) => dispatch(setCurrentUser(user, userNumber))
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
