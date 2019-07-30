// import React from 'react';
// import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
// import Geocode from 'react-geocode';

// Geocode.setApiKey("AIzaSyD4ZvtKE4ETQDErCTAsWrnbrLAzOXWiWgQ")
// Geocode.enableDebug();

// export default class MapBox extends React.Component {

// componentDidUpdate() {
// 	Geocode.fromLatLng(this.props.map.lat, this.props.map.long).then(
// 		response => {
// 		  const address = response.results[0].formatted_address;
// 		  console.log(address);
// 		},
// 		error => {
// 		  console.error(error);
// 		}
// 	  );
// }

// 	render() {

// 		const GoogleMaps = withScriptjs(withGoogleMap(props => (
// 			<GoogleMap
// 				defaultCenter = {{ lat: 40.756795, lng: -73.954298 }}
// 				defaultZoom = {13}
// 			>
// 				<Marker position={{ lat: 40.756795, lng: -73.954298 }} draggable={true} />
// 			</GoogleMap>
// 		)));

// 		return(
// 			<div className="map-box">
// 				<GoogleMaps
// 					isMarkerShown
// 					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDfhDzPrZnE76OKqzMc6W0G7yG0ZJNiHS4&callback=initMap"
// 					loadingElement={<div style={{ height: `100%` }} />}
// 					containerElement={<div style={{ height: `400px`, width: `400px` }} />}
// 					mapElement={<div style={{ height: `100%` }} />}
// 				/>
// 			</div>
// 		)
// 	}
// }
