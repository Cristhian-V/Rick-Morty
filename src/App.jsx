import './App.css'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import useGetLocation from './hooks/useGetLocation'

//Import de Imagenes
import imagen from './assets/img/Rick-And-Morty.png'
import imageLeters from './assets/img/Rick-And-Morty-L.png'

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
      <figure className='container-image'>
      <img src={imagen} alt="imagen de Rick and Morty" className='imgMovil'/>
      </figure>
      <Location location={location} />
      <form action="">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
      </form>
      <div className='resedentInfo-container'>
        {
          location?.residents.map(URL => (
            <ResidentInfo key={URL} URL={URL} />
          ))
        }
      </div>
    </div>
  )
}

export default App
