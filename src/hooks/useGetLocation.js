import axios from "axios"
import { useEffect, useState } from "react"

const useGetLocation = () => {
  const [location, setlocation] = useState()

  useEffect(() => {
    const idLocation = Math.floor(Math.random() * 126) + 1
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`
    axios.get(URL)
      .then(res => setlocation(res.data))
      .catch(err => console.log(err))
  }, [])



  const getLocation = (idLocation) => {
    const URL = `https://rickandmortyapi.com/api/location/${idLocation}`
    axios.get(URL)
      .then(res => setlocation(res.data))
      .catch(err => console.log(err))
  }

  return { location, getLocation }
}

export default useGetLocation