import React, { Component } from 'react'
import MapContainer from './MapContainer'

import ExhibitionGrid from './ExhibitionGrid'
import Filter from './Filter'
import { connect } from 'react-redux'

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
        if (obj.Media["_text"] !== undefined) {
          if (this.state["2D Media"] !== "" && obj.Media["_text"].includes(this.state["2D Media"])) {
            twoDMediaEventsArray.push(obj)
          }
          else if (this.state["3D Media"] !== "" && obj.Media["_text"].includes(this.state["3D Media"])) {
            threeDMediaEventsArray.push(obj)
          }
          else if (this.state["Screen Media"] !== "" && obj.Media["_text"].includes(this.state["Screen Media"])) {
            screenMediaEventsArray.push(obj)
          }
          else if (this.state["Other Media"] !== "" && obj.Media["_text"].includes(this.state["Other Media"])) {
            otherMediaEventsArray.push(obj)
          }
          else if (this.state["2D Media"] === "" && this.state["3D Media"] === "" && this.state["Screen Media"] === ""
            && this.state["Other Media"] === "" && this.state["Other Media"] === ""
          ) {
            allEventsArray.push(obj)
            return allEventsArray
          }
        }
      }
      )
    }

    let filteredEventsArray = twoDMediaEventsArray.concat(threeDMediaEventsArray, screenMediaEventsArray, otherMediaEventsArray)

    if (allEventsArray.length > 1) {
      return allEventsArray
    }
    else {
      return filteredEventsArray
    }

  }//closes function

  render(){
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

export default connect(mapStateToProps)(Homepage)
