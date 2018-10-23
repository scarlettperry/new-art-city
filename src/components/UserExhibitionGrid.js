import React, { Component } from 'react'
import UserSingleExhibit from './UserSingleExhibit'

import { connect } from 'react-redux'

class UserExhibitionGrid extends Component {

  singleUserEvent = () => {
  return this.props.userEvents.map(event =>
        <UserSingleExhibit
          key={event.id}
          event={event}
        />)
  }

  render(){
    return (
      <div className="exhibition-grid row user-events-container">
        {this.singleUserEvent()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userEvents: state.userEvents
  }
}

export default connect(mapStateToProps)(UserExhibitionGrid)
