import React, { Component } from 'react';
import '../App.css';
import Homepage from './Homepage'
import UserProfile from './UserProfile'

import { loadEvents } from '../actions/index'
import { connect } from 'react-redux'


class App extends Component {

  //dispatching action to change initial state
  componentDidMount(){
    this.props.loadEvents()
  }

  render() {
    return (
      <div className="App">
        <Homepage />
        <UserProfile />
      </div>
    );
  }
}

export default connect(null, { loadEvents })(App);
