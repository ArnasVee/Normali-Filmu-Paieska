import {useState} from "react";
const Search=(props)=>{
    const [term,setTerm]=useState('');   //i cia eina paieskos terminas

    const handleChange = (e)=>{
        setTerm(e.target.value)
    }

    console.log(term)

    const submitHandler = (e) => {
      e.preventDefault();
      props.onSearch(term)
    }
    return(
        <div className="container">
            <div className="card mt-2"  >
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <input type="text" placeholder="Filmo Pavadinimas" onChange={handleChange} className="form-control mb-1"/>
                        <button type="submit" className="btn btn-primary">Ieškoti</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Search