import React, { useState } from 'react' //rafce
import { espectaculos } from '../espectaculos'
import Espectaculo from './Raton'
import Form from './Form'

const Shows = () => {
    //useState por default crea un espacio y una funcion para cambiar ese espacio
    const[selected,setSelected] = useState(null)
  return (
    //si seleted es diferente de null escribe formulario de compra
    <div>
        {selected ? <Form show={selected}/>:null}
     {espectaculos.map((espectaculo)=>(
    //tengo que pasar espectaculo, aqui estamos usando las props para renderizar un bloque de codigo varias veces
       <Espectaculo key={espectaculo.id} espectaculo={espectaculo}  setSelected={setSelected}/>
      
     ))}
    </div>
  )
}

export default Shows
