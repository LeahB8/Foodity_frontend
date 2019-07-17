import React from "react";
import ReactMapGL from "react-map-gl";

class MapBox extends React.Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  handleChange = () => {
    this.setState({ ...this.state.viewport, latitude: this.props.coordinates.lat, longitude: this.props.coordinates.long })
  }

  render() {
    return (
      <div>
        <ReactMapGL
          onViewportChange={this.handleChange}
          mapboxApiAccessToken={
            "pk.eyJ1IjoibGVhaGI4IiwiYSI6ImNqeTc3aWxlNjBvMTgzY2xlM2F6Z2tvY3kifQ.Ea4H7mlhHzSaS47_oNYKGA"
          }
        />
      </div>
    );
  }
}

export default MapBox;
