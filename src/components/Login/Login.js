import { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/slices/AuthSlice";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginIsLoading = useSelector(
    ({ authState: { loginIsLoading } }) => loginIsLoading
  );
  const canSubmit = Boolean(username?.length > 0 && password?.length > 0);
  const handleLogin = (e) => {
    e.preventDefault();
    if (password && username) {
      dispatch(signIn({ username, password }, navigate));
    }
  };
  return (
    <div id="login-form">
      <h1>WELCOME BACK!</h1>
      <form onSubmit={handleLogin}>
        <div className="form-element">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-element">
          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              type={passwordIsVisible ? "input" : "password"}
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <IoMdEye
              className={`eye-icon ${passwordIsVisible ? "active" : ""}`}
              onClick={() => setPasswordIsVisible(!passwordIsVisible)}
            />
          </div>
        </div>
        <a id="recover" href="#">
          Recover password
        </a>

        <button type="submit" className={canSubmit ? "active" : ""}>
          LOG IN
        </button>
      </form>
      <p id="alternative-access">
        You don’t have an account? <Link to="/register">SIGN UP HERE</Link>
      </p>
    </div>
  );
}

export default LoginForm;
