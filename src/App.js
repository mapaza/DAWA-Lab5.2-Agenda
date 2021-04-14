import React, { useState } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: 952612302 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ filtrados, setFiltrados ] = useState([{}])

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
const handleNameChange = (nuevo_contacto) =>{
    console.log(nuevo_contacto)
    setNewName(nuevo_contacto)
}
const handlePhoneChange = (nuevo_numero) =>{
  console.log(nuevo_numero)
  setNewPhone(nuevo_numero)
}

var results = [{}]
const handleSearchChange = (searched) =>{
  console.log(searched)
  setSearch(searched)
  //Métodos  que filtran la información
  results = persons.filter((person)=> person.name.includes(searched))
  console.log(results)
  //Se asigna el valor al estado Filtrados
  setFiltrados(results)
}


  return (
    <div style={{padding:20, backgroundColor:'beige'}}>
      <h2>Phonebook</h2>
        <Filter onSearchChange={handleSearchChange}/>

      <h3>Add New Contact</h3>
      <PersonForm onNameChange={handleNameChange} onClick={handleClick}
      onPhoneChange={handlePhoneChange}/>

      <h2>Numbers</h2>
      <Persons search={search} filtrados={filtrados} persons={persons}/>
      
    </div>
  )
}

export default App