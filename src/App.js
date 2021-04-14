import React, { useState } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

const handleClick = () =>{
    console.log("Click en el Boton")
    console.log(newName)
    const nuevoNombre = {
      name:newName
    }
    setPersons([
      ...persons,
      nuevoNombre
    ])
}
const handleChange = (event) =>{
    var nuevo_contacto = event.target.value
    console.log(nuevo_contacto)
    setNewName(nuevo_contacto)
}

  return (
    <div style={{margin:20}}>
      <h2>Phonebook</h2>
     
        <div>
          name: <input onChange={handleChange}/>
        </div>
        <div>
          <button onClick={handleClick}>add</button>
        </div>
      
      <h2>Numbers</h2>
      {
        persons.map((person)=>
        <p key={person.name}>{person.name}</p>
        )
      }
    </div>
  )
}

export default App