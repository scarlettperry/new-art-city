import React, { Component } from "react";
import Map from "../components/Map";

export default class MapContainer extends React.Component {

	render() {
		return (
			<Map
				// doctors={this.props.doctors}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=APIKEYGOESHERE&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}
