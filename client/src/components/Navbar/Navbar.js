import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import Axios from "axios";
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function NavNav(props) {
  const history = useHistory();

  const logout = () => {
    Axios.get("/api/users/logout").then(function () {
      props.userHasAuthenticated(false);
      history.push("/");
    });
  };
  return (
    <Navbar expand="lg" style={{backgroundColor: "rgb(255, 190, 104)", padding: "5px"}}>
  <Navbar.Brand href="/" style={{color: "rgb(249, 243, 231)", fontSize: "55px", width: "100%"}}>Eats Around Me
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: "flex-end"}}>
    <Nav className="mr-auto Nav">
      <Nav.Link href="/about" style={{color: "rgb(249, 243, 231)", fontSize: "20px"}}>About</Nav.Link>
      {props.isAuthenticated 
      ? 
        (
          <Nav.Link 
            href="/signin" 
            onClick={logout}
            style={{color: "rgb(249, 243, 231)", fontSize: "20px"}}
            className="nav-link"
          >
            Logout
          </Nav.Link>
        
        )
      :
        (
          <>
          <Nav.Link 
            href="/signin"
            style={{color: "rgb(249, 243, 231)", fontSize: "20px"}}
            >
              Sign In
            </Nav.Link>
            <Nav.Link
            href="/signup"
            style={{color: "rgb(249, 243, 231)", fontSize: "20px"}}
            >
              Sign Up
            </Nav.Link>
          </>
        )}
    </Nav>
  </Navbar.Collapse>


</Navbar>


  );
}

export default NavNav;