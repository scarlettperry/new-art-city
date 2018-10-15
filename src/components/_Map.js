// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
//
// class Map extends Component {
//   constructor(props) {
//       super(props);
//
//       const {lat, lng} = this.props.initialCenter;
//       this.state = {
//         currentLocation: {
//           lat: lat,
//           lng: lng
//         }
//       }
//     }
//
//   componentDidUpdate(prevProps, prevState) {
//       if (prevProps.google !== this.props.google) {
//         this.loadMap();
//       }
//     }
//
//   componentDidMount() {
//     this.loadMap();
//   }
//
//   loadMap() {
//     if (this.props && this.props.google) {
//       // google is available
//       const {google} = this.props;
//       const maps = google.maps;
//
//       const mapRef = this.refs.map;
//       const node = ReactDOM.findDOMNode(mapRef);
//
//       let zoom = this.props.zoom;
//       let lat = this.state.currentLocation.lat;
//       let lng = this.state.currentLocation.lng;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = Object.assign({}, {
//         center: center,
//         zoom: zoom
//       })
//       this.map = new maps.Map(node, mapConfig);
//
//       let centerChangedTimeout
//       this.map.addListener('dragend', (evt) => {
//         if (centerChangedTimeout) {
//           clearTimeout(centerChangedTimeout)
//           centerChangedTimeout = null
//         }
//         centerChangedTimeout = setTimeout(() => {
//           this.props.onMove(this.map)
//         }, 0);
//       })
//
//     }
//
//   }
//
//   render(){
//     console.log(this.props);
//
//     const style = {
//       width: '50vw',
//       height: '50vh'
//     }
//
//     return (
//       <div style={style} ref='map'>
//           Loading map...
//       </div>
//     )
//   }
// }
//
// Map.defaultProps = {
//   zoom: 13,
//   // NYC, by default
//   initialCenter: {
//     lat: 40.7484,
//     lng: -73.9857
//   },
//   onMove: function() {}
// }
//
//
//
// export default Map
