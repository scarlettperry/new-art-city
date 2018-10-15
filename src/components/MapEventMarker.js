import React from "react";
import { Marker } from "react-google-maps";
import point from "../images/point.png";

export default class MapEventMarker extends React.Component {

  render(){
    // console.log(this.props)
    let latitude = Number(this.props.event.Latitude["_text"])
    let longitude = Number(this.props.event.Longitude["_text"])
    console.log(latitude, longitude)

    let location = {lat: latitude, lng: longitude }
    return(
        <Marker
          position={location}
          icon={point}
        >
        </Marker>
    );
  }
}
