import { useEffect } from 'react'
import './App.css'
import Location from './components/Location'
import GetLocation from './hooks/useGetLocation'

function App() {
  let randomLocation = Math.floor((Math.random() * 126)+1)
  const location = GetLocation(randomLocation)

  const handleChange = e => {
    randomLocation = e.target.value    
  }

  const handleClick = e => {
    e.preventDefault()
    location = GetLocation(randomLocation)
  }
  useEffect(()=>{
  
  },[location])
  
  return (
    <div className="App">
      <Location location={location}/>

      <form action="" de>
        <input type="text" id='NewLocation' onChange={handleChange}/>
        <button onClick={handleClick}> Search </button>
      </form>
    </div>
  )
}

export default App
