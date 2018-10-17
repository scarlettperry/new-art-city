import React, { Component } from 'react'

class MapEventCard extends Component {
  // constructor() {
  //
  // }
  render(){
    console.log(this.props.event)
    return(
      <div className="ui items">
        <div className='item'>
          <div className='image'>
            <img src={this.props.event.Image[2]["_attributes"]["src"]} alt="event"
            />
          </div>
          <div className='content'>
            {/* <div className='header'>{this.props.event.Name["_text"]}</div> */}
            <div className='meta'>@{this.props.event.Venue.Name["_text"]}</div>
            <div className='description'>{this.props.event.Name["_text"]}</div>
            {/* <div className='extra'>Extra</div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default MapEventCard
