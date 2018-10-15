import React, { Component } from 'react'
import MapContainer from './MapContainer'
import ExhibitionGrid from './ExhibitionGrid'
import Filter from './Filter'

import { connect } from 'react-redux'
import { setFilteredLocations } from '../actions/index'

class Homepage extends Component {

  constructor(){
    super()
    this.state = {
      "2D Media": "",
      "3D Media": "",
      "Screen Media": "",
      "Other Media": ""

    }
  }

  handleFilter = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  filterMedia = () => {
    let allEventsArray = []
    let twoDMediaEventsArray = []
    let threeDMediaEventsArray = []
    let screenMediaEventsArray = []
    let otherMediaEventsArray = []

    if (this.props.events) {
      this.props.events.filter(obj => {

        let string = obj.Media["_text"] || obj.Media.map((obj2) => {return obj2["_text"]}).join(" ")
        // console.log(string);
          if (this.state["2D Media"] !== "" && string.includes(this.state["2D Media"])) {
            twoDMediaEventsArray.push(obj)
          }
          else if (this.state["3D Media"] !== "" && string.includes(this.state["3D Media"])) {
            threeDMediaEventsArray.push(obj)
          }
          else if (this.state["Screen Media"] !== "" && string.includes(this.state["Screen Media"])) {
            screenMediaEventsArray.push(obj)
          }
          else if (this.state["Other Media"] !== "" && string.includes(this.state["Other Media"])) {
            otherMediaEventsArray.push(obj)
          }
          else if (this.state["2D Media"] === "" && this.state["3D Media"] === "" && this.state["Screen Media"] === ""
            && this.state["Other Media"] === "" && this.state["Other Media"] === ""
          ) {
            allEventsArray.push(obj)
          }
      }
      )
    }

    let filteredEventsArray = twoDMediaEventsArray.concat(threeDMediaEventsArray, screenMediaEventsArray, otherMediaEventsArray)

    this.props.setFilteredLocations(filteredEventsArray)

    if (allEventsArray.length > 1) {
      return allEventsArray
    }
    else {
      return filteredEventsArray
    }

  }//closes function

  render(){
    // console.log(this.props.events)
    return (
      <div>
        <Filter
          handleFilter={this.handleFilter}
        />
        <ExhibitionGrid
          events={this.filterMedia()}
        />
        <MapContainer />
      </div>
    )
  }
}

//redux
const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, { setFilteredLocations })(Homepage)
