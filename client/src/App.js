import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);

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
            value={{ isAuthenticated, userHasAuthenticated }}
          >
            <Route exact path={"/"}>
              <Homepage />
            </Route>
            <Route exact path={"/login"}>
              <Login />
            </Route>
            <Route exact path={"/signup"}>
              <Signup />
            </Route>
          </AppContext.Provider>
        </Switch>
        <h1>hello!</h1>
      </div>
    </Router>
  );
}

export default App;
