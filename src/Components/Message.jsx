import React from 'react'

const Message = ({email,name}) => {
  return (
    <div>
        <h2>Gracias {name}</h2>
      <h3>Te enviamos tus entradas a {email}</h3>
    </div>
  )
}

export default Message
