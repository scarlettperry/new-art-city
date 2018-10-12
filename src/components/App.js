import React, { Component } from 'react';
import '../App.css';
import { loadEvents } from '../actions/index'
import { connect } from 'react-redux'


class App extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     compactJson: []
  //     //compactJson: {Events:[]}
  //   }
  // }

  //dispatching action to change initial state
  componentDidMount(){
    this.props.loadEvents()

    // const convert = require('xml-js')
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    // const targetUrl = 'http://www.nyartbeat.com/list/event_searchNear?latitude=40.719130&longitude=-73.980000'
    //
    // fetch(proxyUrl + targetUrl)
    //   .then(respone => respone.text())
    //   .then(data => convert.xml2json(data, {compact: true, spaces: 4}))
    //   .then(data=> JSON.parse(data))
    //   .then(data => this.setState({compactJson: data}))
  }

  // slaponDOM = () => {
  //   console.log("hello");
  //   if (this.state.compactJson.Events) {
  //     console.log(this.state.compactJson.Events.Event.map(obj => console.log(obj)))
  //   }
  // }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        New Art City!
      </div>
    );
  }
}

//receiving current state as props
const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, { loadEvents })(App);
