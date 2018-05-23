import   React, { Component } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

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

export default WindCompass;



