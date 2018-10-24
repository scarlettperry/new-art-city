import React, { Component } from 'react'
import UserSingleExhibit from './UserSingleExhibit'

import moment from 'moment'

import { connect } from 'react-redux'

class UserExhibitionGrid extends Component {

  filterEventsByDate = () => {
    if (this.props.datesRange.from !== undefined && this.props.datesRange.to !== undefined) {
      return this.props.userEvents.filter(
        event => moment(event["date_start"]).toDate() <= this.props.datesRange.from  && moment(event["date_end"]).toDate() >= this.props.datesRange.to
      )
    }
    else {
      return this.props.userEvents
    }
  }

  singleUserEvent = () => {
    let filteredEvents = this.filterEventsByDate()
    return filteredEvents.map(event =>
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
    userEvents: state.userEvents,
    datesRange: state.datesRange
  }
}

export default connect(mapStateToProps)(UserExhibitionGrid)
