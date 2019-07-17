import { GoogleComponent } from 'react-google-location' 
 import React, { Component } from 'react';
 
 
 
const API_KEY = 'AIzaSyBCBHPFLi3Obw7a2iizCdlge2sfzNG_ryE'
 
class LocationSearchComponent extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       place: null,
//     };
//   }
 
  render() {
      const { changeCoordinatesState } = this.props
    return (
      <div >
         <GoogleComponent
            apiKey={API_KEY}
            language={'en'}
            coordinates={true}
            onChange={changeCoordinatesState}
          />
      </div>
 
    )
  } 
}
 
 
export default LocationSearchComponent;
 