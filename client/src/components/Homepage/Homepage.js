import React, { useState, useEffect } from 'react'
import API from '../../utils/API.js'
import axios from 'axios'
import Search from "../Search/Search"
import Carousel from "../Carousel/Carousel"

const Homepage = () => {
    const [location, setLocation] = useState("")
    const [venues, setVenues] = useState([]);



    // function getLocation() {
    //     navigator.geolocation.getCurrentPosition(res => {
    //         console.log(res);
    //         setLocation(response.coords.position.latitude+","+response.coords.position.longitude)

    //     }).then(getVenues("taco"))
    // }


    // useEffect(() => {
    //     getAPI();
    //     // getLocation();

    // }, [])


    console.log('Venue state!!!', venues)
    return (
        <div className="homepage">
            <h1>Connected!</h1>
            <Search setVenues={setVenues} />
            <ul>
                <div class="row">
                    {venues.slice(0, 5).map((venue, index) => {
                        // console.log(venue.venue.deliver.url)
                        // console.log(venue.venue.delivery)
                        // return <li key={venue.venue.name}>{venue.venue.name} Location: {venue.venue.location.address}</li>
                        // cconditional rendering based on if venue.venue.delivery exister
                        return <div class="col-sm-4">
                            <div className="card text-center" style={{ width: "30rem" }} key={"venue-" + index}>
                                <div className="card-header">
                                    <h5 className="card-title">{venue.venue.name}</h5>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-title">{venue.venue.location.address}, {venue.venue.location.city}</h6>
                                    <p className="card-text"></p>
                                    {/* {venue.venue.delivery != undefined ? <a href={venue.venue.delivery.url} class="btn btn-light">Get It Delivered</a> : null} */}
                                    {/* above is the way to do the rendering with a ternary. because the falsey returns null, we can use the short circuiting technique below for a little bit cleaner code */}
                                    {venue.venue.delivery && <a href={venue.venue.delivery.url} className="btn btn-dark">Get It Delivered</a>}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </ul>
            <Carousel venues={venues} />

        </div>
    )
}

export default Homepage;
