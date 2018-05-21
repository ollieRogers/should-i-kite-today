import   React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const WindCompass = withScriptjs(withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={13}
        defaultCenter={{ lat: 50.720806, lng: -1.904755 }}
    >
    <div className="arrow" style={{
        width: '50px',
        height: '100%',
        position: 'absolute',
        left: '50%',
        top: '0',
        backgroundColor: 'red',
        transition: 'transform 1s ease',
        marginLeft:'-25px',
        boxShadow: `inset 0 -20px black`, // black tip points in the direction the wind going
        transform: `rotate(${props.bearing}deg)`,

    }}/>
  </GoogleMap>
)))
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



