import React, { Component } from 'react'

class SingleExhibit extends Component {

exhibitDetails = () => {
    if (this.props.event) {
      return (
        <div>
          <br/>
          <img src={this.props.event.Image[2]["_attributes"]["src"]}/><br/>
          {this.props.event.Name["_text"]}<br/>
          @{this.props.event.Venue.Name["_text"]}<br/>
          <i>Days till closing</i>: {this.props.event.DaysBeforeEnd["_text"] === "0" ? <strong>TODAY</strong> : `${this.props.event.DaysBeforeEnd["_text"]}`}<br/><br/>
        </div>
      )
    }
  }

  render(){
    console.log(this.props)
    return (
      <div>
        {this.exhibitDetails()}
      </div>
    )
  }
}

export default SingleExhibit
