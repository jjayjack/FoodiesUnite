import { response } from 'express'
import React, {useState, useEffect} from 'react'
import API from '../../utils/API.js'
import axios from 'axios'
import Search from "../Search"

const Homepage = () => {
    const [location, setLocation] = useState("")

    function getLocation() {
        navigator.geolocation.getCurrentPosition(res => {
            console.log(res);
            setLocation(response.coords.position.latitude+","+response.coords.position.longitude)

        }).then(getVenues("taco"))
    }

    function getVenues(query) {
        const endPoint ="https://api.foursquare.com/v2/venues/explore"
        const params = {
            client_id: "",
            client_secret:"",
            ll: location,
            query: query,
            v: "20180323"
        }
        axios.get(endpoint+ new URLSearchParams(params)).then(res => {
            console.log(res.data.ressponse.groups[0].items)
            setLocation({venues:response.data.response.groups[0].items})
        })
    }
        // API.getRestaurants

    useEffect(() => {
        getLocation()
    }, [location])

    return (
        <div className="homepage">
            <h1>Connected!</h1>
            <Search />
            <ul>
            {location.venues.map(venue => {
                return <li key={venue.venue.name}>{venue.venue.name} Location: {venue.venue.location.address}</li>
            })}
            </ul>
                       
        </div>
    )
}

export default Homepage
