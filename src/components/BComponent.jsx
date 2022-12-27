import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../models/contact.class'

const BComponent = ({contact}) => {
  
    let status = contact.online;
    const handleCLick = (e) =>{ 
        e.preventDefault()
        status? status = false : status = true;
    }

  return (
      <div>
          <h2>Contact</h2>
          <div>
              <ul>
                  <li>Name: {contact.name}</li>
                  <li>Last Name: {contact.lastName}</li>
                  <li>Email: {contact.email}</li>
                  <div>
                      <li>Status: {status ? 'Contacto En Línea' : 'Contacto No Disponible'}</li>
                      <button onClick={handleCLick} value={status}>Change State</button>
                  </div>
              </ul>
          </div>
      </div>
  )
}

BComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default BComponent