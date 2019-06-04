import React, { useState, createContext } from "react"

const inititalState = { weatherData: null}

export const GlobalContext = createContext(inititalState.weatherData)

const ContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(inititalState.weatherData)

  return <GlobalContext.Provider value={[weatherData, setWeatherData]}>{children}</GlobalContext.Provider>
}

export default ContextProvider
