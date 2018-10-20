import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postUserEvents } from '../actions/railsAPI'

//modal
import Popup from "reactjs-popup";


class SingleExhibit extends Component {

exhibitDetails = () => {
    if (this.props.event) {
      if (!this.props.event.Image[2]["_attributes"]["src"].includes("nopic")) {
        return (
          <div className="column">
            <Popup
              trigger={<img src={this.props.event.Image[2]["_attributes"]["src"].slice(0,-4)} height="170" width="170"alt="event"/>}
              modal
              closeOnDocumentClick
              >
                <div>
                  {/* <img src={this.props.event.Image[2]["_attributes"]["src"]} alt="event"/> */}
                  {this.props.event.Name["_text"]}<br/>
                  @{this.props.event.Venue.Name["_text"]}<br/>
                  <i>Days till closing</i>: {this.props.event.DaysBeforeEnd["_text"] === "0" ? <strong>TODAY</strong> : `${this.props.event.DaysBeforeEnd["_text"]}`}<br/>
                </div>
              </Popup><br/>
              {/* {this.props.event.Name["_text"]}<br/>
              @{this.props.event.Venue.Name["_text"]}<br/>
              <i>Days till closing</i>: {this.props.event.DaysBeforeEnd["_text"] === "0" ? <strong>TODAY</strong> : `${this.props.event.DaysBeforeEnd["_text"]}`}<br/> */}
              <br/><button onClick={()=>this.props.postUserEvents(this.props.event)}>Save to Profile</button><br/><br/>
            </div>
          )
      }
    }
  }

  render(){
    // console.log(this.props)
    return (
      <div className="child">
        {this.exhibitDetails()}
      </div>
    )
  }
}

export default connect(null, { postUserEvents })(SingleExhibit)
