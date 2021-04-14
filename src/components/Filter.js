const Filter = (props) => {

const handleSearchChange = (event) =>{
    props.onSearchChange(event.target.value)
}
	return (
        <div style={{padding:20,marginBottom:20, backgroundColor:'lightskyblue', width:300}}>
          Filter shown with <input onChange={handleSearchChange}/>
        </div>
	)
}	
export default Filter