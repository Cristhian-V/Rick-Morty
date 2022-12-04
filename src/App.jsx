import axios from 'axios'
import './App.css'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import useGetLocation from './hooks/useGetLocation'

function App() {
  const { location, getLocation } = useGetLocation()
  let nweIdLocation

  const handleChange = e => {
    nweIdLocation = e.target.value
  }

  const handleClick = e => {
    e.preventDefault()
    getLocation(nweIdLocation)
  }


  return (
    <div className="App">
      <Location location={location} />
      <form action="">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
      </form>
      <div className='resedentInfo-container'>
        {
          location?.residents.map(URL => (
            <ResidentInfo URL={URL} />
          ))
        }
      </div>
    </div>
  )
}

export default App
