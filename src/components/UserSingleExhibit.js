import React, { Component } from 'react'

//modal
import Popup from "reactjs-popup";

class UserSingleExhibit extends Component {

  render(){
    // console.log(this.props.event)
    return (
      <div>
        <Popup
          trigger={
            <img src={this.props.event["img_url"]} alt="event"/>}
          modal
          closeOnDocumentClick
        >
          <div>
            {/* <img src={this.props.event["img_url"]} alt="event"/> */}
            {this.props.event["exhibition_name"]}<br/>
            @{this.props.event["venue_name"]}<br/>
          </div>
      </Popup>
      <button>Delete Event</button><br/><br/>
    </div>
    )
  }
}

export default UserSingleExhibit
