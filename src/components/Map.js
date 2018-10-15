import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MapEventMarker from "./MapEventMarker";

const Map = withScriptjs(withGoogleMap((props) =>{

  // const markers = props.doctors.map( doctor => <EventMarker
  //                   key={doctor.uid}
  //                   doctor={doctor}
  //                   location={{lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon}}
  //                 />);

  return (
      <GoogleMap
        defaultZoom={11}
        center={ { lat:  40.7484, lng: -73.9857 } }
        >
        {/* {markers} */}
        <MapEventMarker/>
      </GoogleMap>
    );
  }
))

export default Map;
