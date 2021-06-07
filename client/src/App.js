import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import API from './utils/API'
import Homepage from './components/Homepage/Homepage'
import NavBar from './components/NavBar/NavBar'
function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [restaurantSearch, setRestaurantSearch] = useState("");


    useEffect(() => {
      API.getRestaurants()
      .then(res => {
        console.log(res)
        // setRestaurants(res.data.results)
      }).catch(err => {console.log("Error getting data ", err )})
    }, [])




  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path={"/"}>
            <NavBar />
            <Homepage />
          </Route>
          <Route exact path = {"/login"}>
            <Login />
          </Route>
          <Route exact path ={"/signup"}>
            <Signup />
          </Route>
        </Switch>
        <h1>hello!</h1>
        
      </div>
    </Router>
  );
}

export default App;
