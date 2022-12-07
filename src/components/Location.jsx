import React from 'react'

const Location = ({ location }) => {

  return (
    <header>
      <div>
      <label><b>Nombre: </b></label>
      <label>{location?.name}</label>
      </div>
      <div>
      <label><b>Tipo: </b></label>
      <label>{location?.type}</label>
      </div>
      <div>
      <label><b>Dimencion: </b></label>
      <label>{location?.dimension}</label>
      </div>
      <div>
      <label><b>Poblacion: </b></label>
      <label>{location?.residents.length}</label>
      </div>
    </header>
  )
}

export default Location