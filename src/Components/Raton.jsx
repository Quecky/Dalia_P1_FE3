import React from 'react'
import { espectaculos } from '../espectaculos'

//si queremos pasar la key, se debe pasar con otro nombre que no sea key,pe {espectaculo,otro}
const Espectaculo = ({espectaculo,setSelected}) => {
  return (

            //contenedor a renderizar, es el que lleva key
       <div >
    
            <img src={espectaculo.img} alt=""/>
            <h2>{espectaculo.artista}</h2>
            <h3>${espectaculo.precio}</h3>
            <h4>{espectaculo.fecha}</h4>
            <button onClick={()=>setSelected(espectaculo)}>Comprar entrada</button>
        </div>

  );
};

export default Espectaculo
