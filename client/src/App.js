import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path={"/"}>
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
