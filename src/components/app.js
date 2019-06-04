import React, { useContext, Fragment, useEffect } from "react"
import axios from "axios"
import { GlobalContext } from "../context/contextProvider"
import Conditions from "./conditions"
import Map from "./map"

const App = () => {
  const [weatherData, setWeatherData] = useContext(GlobalContext)

  useEffect(() => {
    async function fetchData() {
      // TODO move to lambda.
      const result = await axios(
        "https://www.pooleyc.co.uk/wdlive/src/everything.php"
      ) 

      const windData = result.data.everything.weather.wind

      const currentConditions = {
        cardinal: windData.avg_direction.cardinal,
        bearing: windData.avg_direction.degrees,
        maxSpeed: windData.max_avg_speed.kn,
        avgSpeed: windData.avg_speed.kn,
        opinion: windData.avg_speed.kn > 16 ? `It's good 😀` : `It isn't great 😞`
      }

      setWeatherData(currentConditions)
    }
    fetchData()
  }, [])

  return (
    <Fragment>
      <Conditions />
      <Map/>
    </Fragment>
  )
}

export default App
