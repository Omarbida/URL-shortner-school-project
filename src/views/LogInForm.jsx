import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES_NAMES } from "../constants";
import useAuth from "../hooks/useAuthContext";
function LogInForm(props) {
  const authContext = useAuth();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errors, setErrors] = useState([false, false]);
  const navigate = useNavigate();
  const submiteHandler = () => {
    const tempErrors = [...errors];
    if (emailValue === "") {
      tempErrors[0] = true;
    }
    if (passwordValue === "") {
      tempErrors[1] = true;
    }
    if (passwordValue.length < 8) {
      tempErrors[1] = true;
    }
    setErrors(tempErrors);
    if (!tempErrors[1] && !tempErrors[0]) {
      authContext.login(emailValue, passwordValue);
    }
  };

  const getError = (i, value) => {
    const tempErrors = [...errors];
    tempErrors[i] = value;
    setErrors(tempErrors);
  };
  return (
    <div className="container">
      <div className="bg-info">
        <div className="info">
          <div>Welcom to SHORT URL</div>
          <p>
            ShortURL is a free service to shorten URLs and create short links
            Create a premium account to shorten unlimited URLs with more
            features for your projects
          </p>
        </div>
      </div>
      <div className="bg-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submiteHandler();
          }}
        >
          <h2>Log in</h2>
          <input
            className={errors[0] ? "error" : ""}
            value={emailValue}
            onChange={(e) => {
              setEmailValue(e.target.value);
              getError(0, false);
            }}
            type={"email"}
            placeholder={"Email example lastname@gmail.co"}
          />

          <input
            className={errors[1] ? "error" : ""}
            onChange={(e) => {
              setPasswordValue(e.target.value);
              getError(1, false);
            }}
            value={passwordValue}
            type={"password"}
            placeholder={"Password"}
          />

          <button type="submit">Log In</button>
          <button
            onClick={() => {
              authContext.guest();
            }}
            className="start-as-gust"
            type="Button"
          >
            Start as gust
          </button>
          <a>
            Don't have an account?
            <span
              onClick={() => {
                navigate(ROUTES_NAMES.signup);
              }}
            >
              Sign Up
            </span>
          </a>
        </form>
      </div>
    </div>
  );
}

export default LogInForm;
