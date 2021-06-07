import React, {useState} from 'react'


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

    


    return (
        <div className="homepage">
            <h1>Connected!</h1>
                       
        </div>
    )
}

export default Homepage
