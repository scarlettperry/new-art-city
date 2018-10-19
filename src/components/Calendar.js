import React, { Component } from 'react'
import { connect } from 'react-redux'

import BigCalendar from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'

const localizer = BigCalendar.momentLocalizer(moment)

class Calendar extends Component {

  eventsForCalendar = () => {
    return this.props.userEvents.map(function (eventObj) {
      return {title: eventObj["exhibition_name"], start: moment(eventObj["date_start"]).toDate(), end: moment(eventObj["date_end"]).toDate(), "allDay?": true, "resource?": eventObj["id"]}
    })
  }

  render(){
    console.log(this.eventsForCalendar());
    return(
      <div>
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          events={this.eventsForCalendar()}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100vh" }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userEvents: state.userEvents
  }
}

export default connect(mapStateToProps)(Calendar)
