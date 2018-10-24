import React, { Component } from "react";
import Map from "../components/Map";

export default class MapContainer extends Component {

	render() {
		const API_KEY = process.env.REACT_APP_GOOGLE_API
		return (
			<div className="map-container">
				<Map
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `600px`, width: `450px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}
