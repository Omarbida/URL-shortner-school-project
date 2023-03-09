import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES_NAMES } from "../constants";
function LogInForm(props) {
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
          <div>Welcom Back</div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            optio consequuntur quis doloremque maiores voluptas quos reiciendis
            officiis exercitationem
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
          <button className="start-as-gust" type="Button">
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
