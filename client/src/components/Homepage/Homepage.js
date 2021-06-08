import { query } from 'express'
import React, {useState} from 'react'
import axios from 'axios'


const Homepage = () => {
    const [location, setLocation] = useState("")
    
    useEffect(() => {
        getLocation()
        
        return () => {
            cleanup
        }
    }, [input])

    getLocation = () => {
        navigator.geolocation.getCurrentPosition(res => {
            console.log(res)
            setLocation(res.coords.latitude+ "," +res.coords.longitude)
        });
    };

    getVenues = (query) => {
        const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
        const params = {
            client_id: "3QBEPB1GAD1QAVE2EHTGEHJOGRVRZ0Z0XANFVEPGW03WHPCO",
            client_secret: "0TXSLBF4KBMO5TQXO3NBUBL533A2HAP2KXIFVSUUBEEWWCU0",
            ll: location,
            query: query,
            v: "20210706"
        }
        axios.get(endPoint+ new URLSearchParams(params).then(res => {
            console.log(res)
        }))
    }

    




    return (
        <div className="homepage">
            <h1>Connected!</h1>
                       
        </div>
    )
}

export default Homepage
