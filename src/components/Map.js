import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapEventMarker from "./MapEventMarker";

import { connect } from 'react-redux'


const Map = withScriptjs(withGoogleMap((props) =>{
  const renderSingleMarker = () => {
    if (props.filteredLocations) {
      return props.filteredLocations.map (event => <MapEventMarker event={event}/>)
    }
  }

  // const singleMarker = props.filteredLocations.map (event => <MapEventMarker event={event}/>)

  return (
      <GoogleMap
        defaultZoom={11}
        center={ { lat:  40.7484, lng: -73.9857 } }
        >
      {renderSingleMarker()}
      </GoogleMap>
    );
  }
))

const mapStateToProps = (state) => {
  return {
    filteredLocations: state.filteredLocations
  }
}

export default connect(mapStateToProps)(Map)
