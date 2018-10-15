import React from "react";
import { Marker } from "react-google-maps";
import point from "../images/point.png";

export default class MapEventMarker extends React.Component {

  render(){
    let location = {lat: 40.7033, lng: -73.9881}
    return(
        <Marker
          position={location}
          icon={point}
        >
        </Marker>
    );
  }
}
