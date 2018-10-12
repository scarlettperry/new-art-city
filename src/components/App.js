import React, { Component } from 'react';
import '../App.css';


class App extends Component {

  constructor(){
    super()
    this.state = {
      compactJson: []
    }
  }

  componentDidMount(){
    const convert = require('xml-js')
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'http://www.nyartbeat.com/list/event_searchNear?latitude=40.719130&longitude=-73.980000'

    fetch(proxyUrl + targetUrl)
      .then(respone => respone.text())
      .then(data => convert.xml2json(data, {compact: true, spaces: 4}))
      .then(data=> JSON.parse(data))
      .then(data => this.setState({compactJson: data}))
  }

  slaponDOM = () => {
    console.log("hello");
    if (this.state.compactJson.Events) {
      console.log(this.state.compactJson.Events.Event.map(obj => console.log(obj)))
    }
  }

  render() {
    this.slaponDOM()
    return (
      <div className="App">
        New Art City!

      </div>
    );
  }
}

export default App;
