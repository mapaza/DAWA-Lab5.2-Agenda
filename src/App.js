import React, { useState } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: 952612302 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')

const handleClick = () =>{
    console.log("Click en el Boton")
    console.log(newName)
    //Array que almacena los nombres y valores ya ingresados
    var nombres=[]
    for(let i=0; i<persons.length;i++){
        nombres.push(persons[i].name)
    }
    //Método que valida newName no se incluya en nombres
    console.log(nombres)
      if(nombres.includes(newName)){
        alert(`${newName} is already added to phonebook`)
      }else{
      const nuevoNombre = {
        name:newName,
        phone:newPhone
      }
      setPersons([
        ...persons,
        nuevoNombre
      ])
}
}
//Funciones de Evento que capturan el valor ingresado en input
const handleNameChange = (event) =>{
    var nuevo_contacto = event.target.value
    console.log(nuevo_contacto)
    setNewName(nuevo_contacto)
}
const handlePhoneChange = (event) =>{
  var nuevo_numero = event.target.value
  console.log(nuevo_numero)
  setNewPhone(nuevo_numero)
}

  return (
    <div style={{padding:20, backgroundColor:'beige'}}>
      <h2>Phonebook</h2>
     
        <div>
          Name: <input onChange={handleNameChange}/>
        </div>
        <div>
          Number: <input type="number" onChange={handlePhoneChange}/>
        </div>
        <div>
          <button onClick={handleClick}>add</button>
        </div>
      
      <h2>Numbers</h2>
      {
        persons.map((person)=>
        <ul key={person.name}>
          <li><b>Name:</b> {person.name}</li>
          <li><b>Number:</b> {person.phone}</li> 
        </ul>
        )
      }
    </div>
  )
}

export default App