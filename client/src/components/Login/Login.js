import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import LoaderButton from "../LoaderButton/LoaderButton.js";
import { useAppContext } from "../../libs/contextLib";
import { useFormFields } from "../../libs/hooksLib";
import { onError } from "../../libs/errorLib";
import "./Login.css";
import Axios from "axios";

export default function Login(props) {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      Axios.post("/api/users/login", {
        email: fields.email,
        password: fields.password,
      }).then((loggedInPerson) => {
        console.log("we logged in!!", loggedInPerson);
        props.userHasAuthenticated(loggedInPerson.data.logged_in);
        history.push("/");
      });
      // await Auth.signIn(fields.email, fields.password);
      // userHasAuthenticated(true);
      // history.push("/");
    } catch (e) {
      // onError(e);
      // setIsLoading(false);
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </Form>
    </div>
  );
}
