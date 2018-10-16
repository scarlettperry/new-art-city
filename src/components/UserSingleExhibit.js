import React, { Component } from 'react'

class UserSingleExhibit extends Component {

  render(){
    console.log(this.props.event)
    return (
      <div>
        <img src={this.props.event["img_url"]} alt="event"/><br/>
        {this.props.event["exhibition_name"]}<br/>
        @{this.props.event["venue_name"]}<br/>
        <button>Delete Event</button><br/><br/>
      </div>
    )
  }
}

export default UserSingleExhibit
