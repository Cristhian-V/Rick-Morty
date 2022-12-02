import { useEffect, useState } from "react"
import axios from 'axios'

const GetLocation = (location) => {
  const [getLocation, setGetLocation] = useState()

  useEffect(()=>{
    const URL = `https://rickandmortyapi.com/api/location/${location}`
    axios.get(URL)
      .then(res => setGetLocation(res.data))
      .catch(err => console.log(err))
  },[])
  
  return getLocation
}

export default GetLocation