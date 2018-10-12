import React, { Component } from 'react'
import SingleExhibit from './SingleExhibit'
import { connect } from 'react-redux'

class ExhibitionGrid extends Component {
  render(){
    console.log(this.props)
    let singleExhibit = this.props.events.map(obj => <SingleExhibit event={obj}/>)
    return (
      <div>
        Hello from ExhibitionGrid
        {singleExhibit}
      </div>
    )
  }
}

// receiving current state as props
const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps)(ExhibitionGrid)
