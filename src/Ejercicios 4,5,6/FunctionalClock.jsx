import { useState, useEffect } from "react"

function FunctionalClock() {
    
    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [estado, setEstado] = useState(initialState)

    const tick = () =>{
        setEstado({
            ...estado,
            fecha: new Date(),
            edad: estado.edad + 1})
     }

     useEffect(() => {
      setInterval(
        () => {
            tick();            
        }, 1000
     )
  
     })
     

  return (
    <div>
        <h2>Hora Actual: {estado.fecha.toLocaleTimeString()}</h2>
         <h3>{estado.nombre} {estado.apellidos}</h3>
         <h1>Edad: {estado.edad}</h1>
    </div>
  )
}

export default FunctionalClock