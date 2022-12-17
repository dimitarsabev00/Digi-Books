import { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../store/slices/AuthSlice";
import { toast } from "react-toastify";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [passwordConfirmIsVisible, setPasswordConfirmIsVisible] =
    useState(false);
  const [passwordMatches, setPasswordMatches] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registerIsLoading = useSelector(
    ({ authState: { registerIsLoading } }) => registerIsLoading
  );

  const canSubmit = Boolean(
    username?.length > 0 && password?.length > 0 && passwordConfirm?.length > 0
  );
  const handleRegister = (e) => {
    e.preventDefault();

    if (password === passwordConfirm) {
      setPasswordMatches(true);
      if (passwordMatches && username) {
        dispatch(signUp({ username, password }, navigate));
      }
    } else {
      toast.error("Password not matched! Please try again");
    }
  };

  return (
    <div id="register-form">
      <h1>WELCOME TO THE BEST BOOK DATABASE!</h1>
      <h2>CREATE YOUR PROFILE</h2>
      <form onSubmit={handleRegister}>
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
        <div className="form-element">
          <label htmlFor="password-confirm">Repeat password</label>
          <div className="password-field">
            <input
              type={passwordConfirmIsVisible ? "input" : "password"}
              id="password-confirm"
              value={passwordConfirm}
              onChange={(e) => {
                setPasswordConfirm(e.target.value);
              }}
            />

            <IoMdEye
              className={`eye-icon ${passwordConfirmIsVisible ? "active" : ""}`}
              onClick={() =>
                setPasswordConfirmIsVisible(!passwordConfirmIsVisible)
              }
            />
          </div>
        </div>

        <button type="submit" className={canSubmit ? "active" : ""}>
          SIGN UP
        </button>
      </form>
      <p id="alternative-access">
        You have an account? <Link to="/login">LOG IN HERE</Link>
      </p>
    </div>
  );
}

export default Register;
