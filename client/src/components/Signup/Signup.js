import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import { useFormFields } from "../../libs/hooksLib";
import "./style.css";

function Signup() {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    setNewUser("test");

    setIsLoading(false);
  }

  return (
    <div className="d-flex flex-column customCenter">
      <h2 className="text-center">Sign up</h2>
      <div className="form-group mx-auto" style="width: 350px">
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="Email"
          value={fields.email}
          onChange={handleFieldChange}
        />
      </div>
      <div className="form-group mx-auto" style="width: 350px">
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Password"
          value={fields.password}
          onChange={handleFieldChange}
        />
      </div>
      <div className="input-group mb-3 mx-auto" style="width: 350px">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          aria-label="confirmPassword"
          aria-describedby="button-addon2"
          onChange={handleFieldChange}
          value={fields.confirmPassword}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-light"
            type="button"
            id="button-addon2"
            onSubmit={handleSubmit}
            disabled={!validateForm()}
          >
            Submit
          </button>
        </div>
      </div>
      <p className="text-center">
        Already have an account?{" "}
        <a href="../Login/Login" className="text-white">
          Log in!
        </a>
      </p>
    </div>
  );
}

export default Signup;
