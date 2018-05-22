import   React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import './compass.css'

const WindCompass = withScriptjs(
  withGoogleMap(props => (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 50.715426, lng: -1.875392 }}
        disableDefaultUI={true}
      >
        <div
          className="compass-arrow"
          style={{
            transform: `rotate(${props.bearing}deg)`
          }}
        />
      </GoogleMap>
  ))
);
// const WindCompass = ({ bearing }) => (
//         <div style={{
//             width:'100%',
//             height:'0',
//             paddingBottom:'100%',   
//             backgroundColor: 'grey',
//             position: 'relative'
//             }}>
//             </GoogleMap>
//             
//             {bearing}
//         </div>
//     )

export default WindCompass;



