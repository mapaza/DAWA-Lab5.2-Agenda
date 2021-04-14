const PersonForm = (props) => {
//Funciones de Evento que capturan el valor ingresado en input
const handleNameChange = (event) =>{
    props.onNameChange(event.target.value)
}
const handlePhoneChange = (event) =>{
    props.onPhoneChange(event.target.value)
}

	return (
        <div>
            <div>
                Name: <input onChange={handleNameChange}/>
            </div>
            <div>
                Number: <input type="number" onChange={handlePhoneChange}/>
            </div>
            <div>
                <button onClick={props.onClick}>add</button>
            </div>
        </div>
	)
}	
export default PersonForm