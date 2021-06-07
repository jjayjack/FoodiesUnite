import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

import API from './utils/API'
import Homepage from './components/Homepage/Homepage'
import NavBar from './components/NavBar/NavBar'
function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantSearch, setRestaurantSearch] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();

    useEffect(() => {
      onLoad();
      API.getRestaurants()
      .then(res => {
        console.log(res)
        // setRestaurants(res.data.results)
      }).catch(err => {console.log("Error getting data ", err )})
    }, [])


  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }


  return (
    <Router>
      <div className="container">
        <Switch>
          <AppContext.Provider
            value={{ isAuthenticated, userHasAuthenticated }}>
          <Route exact path={"/"}>
            <NavBar />
            <Homepage />
          </ Route>
          <Route exact path = {"/login"}>
            <Login />
          </ Route>
          <Route exact path ={"/signup"}>
            <Signup />
          </ Route>
          </ AppContext.Provider>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
