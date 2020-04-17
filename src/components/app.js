import React, { useContext, Fragment, useEffect } from "react"
import axios from "axios"
import { GlobalContext } from "../context/contextProvider"
import Conditions from "./conditions"
import Map from "./map"

const App = () => {
  const [weatherData, setWeatherData] = useContext(GlobalContext)
  console.log(process.env)
  useEffect(() => {
    async function fetchData() {
      // TODO move to lambda.
      const result = await axios(process.env.GATSBY_WEATHER_API_URL) 
      const {deg, speed} = result.data.list[0].wind

      const currentConditions = {
        bearing: deg,
        speed: speed,
        opinion: speed > 8 ? `It's good 😀` : `It isn't great 😞`
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
