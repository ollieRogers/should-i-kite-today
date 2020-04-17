import React, { useContext, Fragment } from "react"
import { GlobalContext } from "../context/contextProvider"

const Conditions = () => {
  const [weatherData] = useContext(GlobalContext)
  return (
    <div className="conditions">
      {!weatherData && <Fragment>Fetching weather...</Fragment>}
      {weatherData && (
        <Fragment>
          <div className="conditions-opinion">{weatherData.opinion}</div>
          <div className="conditions-detail">
            wind speed {weatherData.speed} m/s
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default Conditions
