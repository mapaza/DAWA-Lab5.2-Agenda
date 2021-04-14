const Persons = (props) => {
	return (
    <div>
		{ props.search ?
            props.filtrados.map((person)=>
            <ul key={person.name}>
              <li><b>Name:</b> {person.name}</li>
              <li><b>Number:</b> {person.phone}</li> 
            </ul>
            )
            :
      props.persons.map((person)=>
            <ul key={person.name}>
              <li><b>Name:</b> {person.name}</li>
              <li><b>Number:</b> {person.phone}</li> 
            </ul>
            )
          }
    </div>
	)
}	
export default Persons