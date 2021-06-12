import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import { AppContext } from "./libs/contextLib";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import Homepage from "./components/Homepage/Homepage";
import NavBar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import About from "./components/About/About";
import NotLoggedIn from "./components/NotLoggedIn/NotLoggedIn.js";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    Axios.get("/api/users/loginCheck").then(function (data) {
      if (data.data.logged_in) {
        userHasAuthenticated(true);
      }
    });
  }, []);

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
            <Route exact path="/" component={NotLoggedIn} />
          </Switch>
        ) : (
          <Route exact path="/" component={Homepage} />
        )}
        <Route exact path="/about" component={About} />
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
