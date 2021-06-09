import React, {useState} from 'react';
import api from './fourSquareAPI'

const IndexPage = () => {
    const [responseData, setResponseData] = useState("");

    const fetchData = (e) => {
        e.preventDefault();

        api.findAllrestaurants()
            .then((response) => {
                setResponseData(response.data)
                console.log(response)
            })  .catch((error) => console.log(error))
    }

return (
    <div>
        <h1>{responseData.title}</h1>
        <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>
        {responseData.dates && responseData.dates.map(date => {
            return <p>{date}</p>
        })}
    </div>
)
}
export default IndexPage