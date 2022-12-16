import { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/slices/AuthSlice";

function LoginForm() {
  const [password, setPassword] = useState({ isVisable: false });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginIsLoading = useSelector(
    ({ authState: { loginIsLoading } }) => loginIsLoading
  );

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    dispatch(signIn({ username, password }, navigate));
  };
  return (
    <div id="login-form">
      <h1>WELCOME BACK!</h1>
      <form onSubmit={handleLogin}>
        <div className="form-element">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="form-element">
          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              type={password.isVisable ? "input" : "password"}
              id="password"
            />
            <IoMdEye
              id="eye-icon"
              className={password.isVisable ? "active" : ""}
              onClick={() =>
                setPassword((prev) => ({
                  ...prev,
                  isVisable: !prev.isVisable,
                }))
              }
            />
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
