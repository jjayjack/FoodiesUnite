import React from 'react'

const Search = (props) => {

    const changeHandler = (event) =>{
    console.log(event.target.value)}

    return (
        <div>
            <input onChange={changeHandler}
            type="text"
            paceholder="search venue"
            name="searchInput"
            id="searchInput"
            />
            <button>Search</button>
            
        </div>
    )
}

export default Search
