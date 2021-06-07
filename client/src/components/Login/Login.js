import React, { useState } from "react";
import { useAppContext } from "../../libs/contextLib";
import { useFormFields } from "../../libs/hooksLib";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import "./style.css";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
  });

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      history.push("/");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="d-flex flex-column customCenter">
      <h2 className="text-center">Login</h2>
      <div className="form-group mx-auto" style="width: 350px">
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Email"
          value={fields.email}
          onChange={handleFieldChange}
        />
      </div>
      <div className="input-group mb-3 mx-auto" style="width: 350px">
        <input
          type="password"
          className="form-control"
          placeholder="password"
          aria-label="Password"
          aria-describedby="button-addon2"
          value={fields.password}
          onChange={handleFieldChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-light"
            type="button"
            id="button-addon2"
            isLoading={isLoading}
            onSubmit={(e) => handleSubmit()}
            disabled={!validateForm()}
          >
            Submit{" "}
          </button>
        </div>
      </div>
      <p className="text-center">
        Don't have an account?{" "}
        <a href="../Signup/Signup" className="text-white">
          Sign up!
        </a>
      </p>
    </div>
  );
}

export default Login;
