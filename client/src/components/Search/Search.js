import React, {useState} from 'react'
import API from '../../utils/API'

const Search = (props) => {

    const [searchTerm, setSearchTerm] = useState('')
    const changeHandler = (event) =>{
    console.log(event.target.value)
    setSearchTerm(event.target.value)
    }

    const handleClick = () => {
        API.getRestaurants(searchTerm).then(function(data) {
            console.log('Datttaa form backend',data )
            props.setVenues(data.data)
        })

    }
console.log('Searchterm', searchTerm)

    return (
        <div>
            <input onChange={changeHandler}
            type="text"
            placeholder="search venue"
            name="searchInput"
            id="searchInput"
            />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default Search
