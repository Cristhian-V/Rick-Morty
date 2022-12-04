import React from 'react'

const Location = ({ location }) => {

  return (
    <div>
      <h1>{location?.name}</h1>
      <ul>
        <li><b>Type: </b> {location?.type}</li>
        <li><b> Dimension: </b>{location?.dimension}</li>
        <li><b> Population: </b> {location?.residents.length} </li>
      </ul>
    </div>
  )
}

export default Location