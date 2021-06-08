import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import { AppContext } from "./libs/contextLib";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

import API from "./utils/API";
import Homepage from "./components/Homepage/Homepage";
import NavBar from "./components/Navbar/Navbar.js";
function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // API.getRestaurants()
    //   .then((res) => {
    //     console.log(res);
    //     // setRestaurants(res.data.results)
    //   })
    //   .catch((err) => {
    //     console.log("Error getting data ", err);
    //   });
    Axios.get("/api/users/loginCheck").then(function (data) {
      console.log("Daytaaa login check!!!", data.data.logged_in);
      if (data.data.logged_in) {
        userHasAuthenticated(true);
      }
    });
  }, []);

  console.log("STATE in the app file!!!", isAuthenticated);
  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Router>
        <NavBar
          collapseOnSelect
          bg="light"
          expand="md"
          className="mb-3"
          isAuthenticated={isAuthenticated}
          userHasAuthenticated={userHasAuthenticated}
        ></NavBar>
        {!isAuthenticated ? (
          <Switch>
            <Route
              path="/signin"
              render={() => (
                <Login userHasAuthenticated={userHasAuthenticated} />
              )}
            />
            <Route
              path="/signup"
              render={() => (
                <Signup userHasAuthenticated={userHasAuthenticated} />
              )}
            />
          </Switch>
        ) : (
          <Route path="/" component={Homepage} />
        )}
      </Router>
    </AppContext.Provider>
  );
}

export default App;
