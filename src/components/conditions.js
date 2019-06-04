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
            {weatherData.cardinal} {weatherData.avgSpeed} knots, gusting to{" "}
            {weatherData.maxSpeed} knots
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default Conditions
