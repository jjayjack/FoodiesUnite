import { response } from 'express'
import React, {useState, useEffect} from 'react'
import API from '../../utils/API.js'
import axios from 'axios'
import Search from "../Search/Search"
import Carousel from "../Carousel/Carousel"

const Homepage = () => {
    const [location, setLocation] = useState("")
    const [venues, setVenues] = useState([]);

    function getLocation() {
        navigator.geolocation.getCurrentPosition(res => {
            console.log(res);
            setLocation(response.coords.position.latitude+","+response.coords.position.longitude)

        }).then(getVenues("taco"))
    }

    const getVenues = (query) => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        const parameters = {
            client_id: "3QBEPB1GAD1QAVE2EHTGEHJOGRVRZ0Z0XANFVEPGW03WHPCO",
            client_secret: "0TXSLBF4KBMO5TQXO3NBUBL533A2HAP2KXIFVSUUBEEWWCU0",
            query: query,
            near: "Chicago",
            v: "20180323"
        }
        axios.get(endPoint + new URLSearchParams(parameters))
            .then(response => {
                setVenues({
                    venues: response.data.response.groups[0].items
                })
                console.log(response.data.response.groups[0].items)

            }).catch(error => {console.log("error", error)
        })
    }
        // API.getRestaurants

    useEffect(() => {
        getLocation()
        getVenues();
    }, [])

    return (
        <div className="homepage">
            <h1>Connected!</h1>
            <Search />
            <ul>
            {location.venues.map(venue => {
                return <li key={venue.venue.name}>{venue.venue.name} Location: {venue.venue.location.address}</li>
            })}
            </ul>
            <Carousel />
                       
        </div>
    )
}

export default Homepage;
