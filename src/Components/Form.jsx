import React, { useState } from 'react' //hook de react
import Message from './Message';

const Form = ({show}) => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const emailRegex=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    const[flag,setFlag] =useState(false);
     {/* /falta crear un estado para manejar el renderizado del mensaje de error */}

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        emailRegex.test("lo que quieres validar"); //true or false
        //realizar vaslidaciones para despues mostrar mensaje de error (de tarea )
        setFlag(true);
    }
  return (//el boton activa el onSubmit del form
    <div>
        
        <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
            <label>Email:</label>
            <input  type="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
            <button>Entradas para {show.artista}</button>
        </form>
      {flag? <Message name={name} email={email}/>:null}
    </div>
  )
}

export default Form
