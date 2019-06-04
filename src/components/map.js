import React, { useContext } from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps"
import { GlobalContext } from "../context/contextProvider"

const WindCompass = withScriptjs(
  withGoogleMap(() => {
    const [weatherData] = useContext(GlobalContext)
    return (
      <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 50.715426, lng: -1.875392 }}
        disableDefaultUI={true}
      >
        {weatherData && (
          <div
            className="compass-arrow"
            style={{
              transform: `rotate(${weatherData.bearing}deg)`,
            }}
          />
        )}
      </GoogleMap>
    )
  })
)

const mapStyle = {
  height: "100%",
  position: "absolute",
  width: "100%",
}

const Map = () => (
  <WindCompass
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOxa8-lFMbda75ruLL45CqSLIqevsxDiU"
    loadingElement={<div style={mapStyle} />}
    containerElement={<div style={mapStyle} />}
    mapElement={<div style={mapStyle} />}
  />
)

export default Map
