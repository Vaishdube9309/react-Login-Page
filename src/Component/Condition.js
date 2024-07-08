import React from 'react'

function Condition(props) {
  return (
    <div>
      <h1 style={{color:"red"}}>Welcome to React tutorial</h1>
      <h2>Name:{props.name}</h2>
      <h2>Email:{props.email}</h2>
    </div>

  )
}

export default Condition
