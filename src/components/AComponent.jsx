import React from 'react'
import { Contact } from '../models/contact.class'
import BComponent from './BComponent'

const AComponent = () => {

    const user = new Contact('Martin', 'Zacca', 'mzacca@hotmail.com', true)
    

  return (
    <div>
        <BComponent contact={user}></BComponent>
    </div>
  )
}



export default AComponent