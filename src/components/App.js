import React, { Component } from 'react';
import '../App.css';
import Homepage from './Homepage'
import UserProfile from './UserProfile'
import Navbar from './Navbar'

import { loadEvents } from '../actions/index'
import { connect } from 'react-redux'

//routers
import {Switch, Route, withRouter} from 'react-router-dom'


class App extends Component {

  //dispatching action to change initial state
  componentDidMount(){
    this.props.loadEvents()
  }

  render() {
    return (
      <div className="App">
        <h1>New Art City!</h1>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/profile" component={UserProfile}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, { loadEvents })(App))
