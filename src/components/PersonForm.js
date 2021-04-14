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
                Name: <input value={props.newName} onChange={handleNameChange}/>
            </div>
            <div>
                Number: <input value={props.newPhone}  type="number" onChange={handlePhoneChange}/>
            </div>
            <div>
                <button 
                style={{backgroundColor:'coral', borderRadius:10,marginTop:20, padding:10}}
                onClick={props.onClick}>Add</button>
            </div>
        </div>
	)
}	
export default PersonForm