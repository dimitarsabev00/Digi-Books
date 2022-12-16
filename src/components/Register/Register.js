import { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/slices/AuthSlice";

function Register() {
  const [password, setPassword] = useState({ isVisable: false });
  const [passwordConfirm, setPasswordConfirm] = useState({
    value: "",
    isVisable: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerIsLoading = useSelector(
    ({ authState: { registerIsLoading } }) => registerIsLoading
  );

  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    dispatch(signUp({ username, password }, navigate));
  };

  return (
    <div id="register-form">
      <h1>WELCOME TO THE BEST BOOK DATABASE!</h1>
      <h2>CREATE YOUR PROFILE</h2>
      <form onSubmit={handleRegister}>
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
              className={`eye-icon ${password.isVisable ? "active" : ""}`}
              onClick={() =>
                setPassword((prev) => ({
                  ...prev,
                  isVisable: !prev.isVisable,
                }))
              }
            />
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="password-confirm">Repeat password</label>
          <div className="password-field">
            <input
              type={passwordConfirm.isVisable ? "input" : "password"}
              id="password-confirm"
            />
            <IoMdEye
              className={`eye-icon ${
                passwordConfirm.isVisable ? "active" : ""
              }`}
              onClick={() =>
                setPasswordConfirm((prev) => ({
                  ...prev,
                  isVisable: !prev.isVisable,
                }))
              }
            />
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
