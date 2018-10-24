import React, { Component } from 'react'
import SingleExhibit from './SingleExhibit'

class ExhibitionGrid extends Component {

  render(){

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
