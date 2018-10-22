import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import point from "../images/bluePoint.png";

import MapEventCard from './MapEventCard'

export default class MapEventMarker extends React.Component {

  state = {
    isOpen: false
  }

  toggleOpen = () => {
    this.setState((prevState)=>{
      return {isOpen: !prevState.isOpen}
    })
  }

  render(){
    console.log(this.state.isOpen)
    let latitude = Number(this.props.event.Latitude["_text"])
    let longitude = Number(this.props.event.Longitude["_text"])

    let location = {lat: latitude, lng: longitude }
    return(
        <Marker
          onClick={this.toggleOpen}
          position={location}
          icon={point}
        >
          {
            this.state.isOpen ?
            <InfoWindow  maxWidth={800} defaultPosition={location} onCloseClick={this.toggleOpen}>
              <MapEventCard event={this.props.event}/>
            </InfoWindow> : null
          }
        </Marker>
    );
  }
}
