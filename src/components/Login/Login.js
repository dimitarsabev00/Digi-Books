import "./Login.scss";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

function LoginForm() {
  return (
    <div id="login-form">
      <h1>WELCOME BACK!</h1>
      <form>
        <div className="form-element">
          <label htmlFor="username">Email</label>
          <input type="text" id="username" />
        </div>
        <div className="form-element">
          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input type="password" id="password" />
            <IoMdEye id="eye-icon" />
          </div>
        </div>
        <a id="recover" href="#">
          Recover password
        </a>

        <button type="submit">LOG IN</button>
      </form>
      <p id="alternative-access">
        You don’t have an account? <Link to="/register">SIGN UP HERE</Link>
      </p>
    </div>
  );
}

export default LoginForm;
