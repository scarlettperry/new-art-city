import React, { Component } from 'react'
import SingleExhibit from './SingleExhibit'
// import { connect } from 'react-redux'

class ExhibitionGrid extends Component {

  render(){
    console.log(this.props.events)

    let singleExhibit = this.props.events.map(obj =>
      <SingleExhibit
        key={obj["_attributes"]["id"]}
        event={obj}
      />)

    return (
      <div className="exhibition-grid exhibition-container row">
        {singleExhibit}
      </div>
    )
  }
}

export default ExhibitionGrid
