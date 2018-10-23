import React, { Component } from 'react'

//modal
import Popup from "reactjs-popup";

class UserSingleExhibit extends Component {

  render(){
    return (
      <div className="column pointer">
        <Popup
          trigger={
            <img
              src={this.props.event["img_url"]}
              height="170"
              width="170"
              alt="event"/>}
          modal
          closeOnDocumentClick
        >
          <div>
            {this.props.event["exhibition_name"]}<br/>
            @{this.props.event["venue_name"]}<br/>
          </div>
      </Popup><br/>
      <button className='ui icon button' role='button'>
        <i aria-hidden='true' className='red heart icon' />
        <span> Unsave</span> 
      </button>
    </div>
    )
  }
}

export default UserSingleExhibit
