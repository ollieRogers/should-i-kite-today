import React, { useContext } from "react"
import { GlobalContext } from "../context/contextProvider"

const Update = () => {
  const [x, setX] = useContext(GlobalContext)
  return <button onClick={e => setX("popo")}>popo</button>
}

export default Update
