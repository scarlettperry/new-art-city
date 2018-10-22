import React, { Component } from "react";
import Map from "../components/Map";

export default class MapContainer extends Component {

	render() {
		return (
			<div className="map-container">
				<Map
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `500px`, width: `450px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}
