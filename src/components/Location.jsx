import React from 'react'

const Location = ({ location }) => {

  return (
    <header>
      <h1 className='header-name'>{location?.name}</h1>
      <ul className='header-list'>
        <li className='header-listDescription'><b>Type: </b> {location?.type}</li>
        <li className='header-listDescription'><b> Dimension: </b>{location?.dimension}</li>
        <li className='header-listDescription'><b> Population: </b> {location?.residents.length} </li>
      </ul>
    </header>
  )
}

export default Location