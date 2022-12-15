import React from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

function Register() {
  return (
    <div id="register-form">
      <h1>WELCOME TO THE BEST BOOK DATABASE!</h1>
      <h2>CREATE YOUR PROFILE</h2>
      <form>
        <div className="form-element">
          <label htmlFor="username">Email</label>
          <input type="text" id="username" />
        </div>
        <div className="form-element">
          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input type="password" id="password" />
            <IoMdEye className="eye-icon" />
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="password-confirm">Repeat password</label>
          <div className="password-field">
            <input type="password" id="password-confirm" />
            <IoMdEye className="eye-icon" />
          </div>
        </div>

        <button type="submit">SIGN UP</button>
      </form>
      <p id="alternative-access">
        You have an account? <Link to="/login">LOG IN HERE</Link>
      </p>
    </div>
  );
}

export default Register;
