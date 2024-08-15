import React, { useState } from 'react'
import Message from './Message';

const Form = ({show}) => {
  const [customer,setCustomer]=useState(
    {
      name:"",
      email:"",
    }
  );

  const handleName=(e)=>{
      //los puntos sirven para que customer se quede igual y solo se cambie un parametro
    setCustomer({...customer, name:e.target.value})
  }


  const handleEmail=(e)=>
  {
    setCustomer({...customer, email:e.target.value})
  }

  const emailRegex=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  const[flag,setFlag] =useState(false);

 {/* /falta crear un estado para manejar el renderizado del mensaje de error */}

  const handleSubmit=(e)=>
  {
      e.preventDefault();
      emailRegex.test("lo que quieres validar"); //true or false
      //realizar vaslidaciones para despues mostrar mensaje de error (de tarea )
     
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input type="text"value={costumer.name} onChange={handleName}/>
            <label>Email:</label>
            <input  type="text"value={costumer.email} onChange={handleEmail}/>
            <button>Entradas para {show.artista}</button>
        </form>
      {flag ? <Message name={customer.email} email={customer.email}/>:null}
    </div>
  )
}
}

export default Form
