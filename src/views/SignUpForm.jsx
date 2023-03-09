import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES_NAMES } from "../constants";
import useAuth from "../hooks/useAuthContext";
function SignUpForm(props) {
  const [nameValue, setNameValue] = useState("");
  const [lastNmaeValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [errors, setErrors] = useState([false, false, false, false, false]);
  const [nameCharacLeft, setNameCharLeft] = useState(16);
  const [lastNameCharacLeft, setLastNameCharLeft] = useState(16);
  const navigate = useNavigate();
  const authContext = useAuth();
  const submiteHandler = () => {
    const tempErrors = [...errors];
    if (nameValue === "") {
      tempErrors[0] = true;
    }
    if (lastNmaeValue === "") {
      tempErrors[1] = true;
    }
    if (emailValue === "") {
      tempErrors[2] = true;
    }
    if (passwordValue === "") {
      tempErrors[3] = true;
    }
    if (confirmPasswordValue === "") {
      tempErrors[4] = true;
    }
    if (passwordValue.length < 8) {
      tempErrors[3] = true;
    }
    if (passwordValue !== confirmPasswordValue) {
      tempErrors[4] = true;
    }
    setErrors(tempErrors);
    if (
      !tempErrors[0] &&
      !tempErrors[1] &&
      !tempErrors[2] &&
      !tempErrors[3] &&
      !tempErrors[4]
    ) {
      authContext.signup(nameValue, lastNmaeValue, emailValue, passwordValue);
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
          <div>Welcom to company</div>
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
          <h2>Sign Up</h2>

          <div>
            <input
              className={errors[0] ? "name error" : "name"}
              onChange={(e) => {
                if (e.target.value.length > 16) {
                  getError(0, true);
                } else {
                  setNameValue(e.target.value);
                  setNameCharLeft(16 - e.target.value.length);
                  getError(0, false);
                }
              }}
              value={nameValue}
              type={"text"}
              placeholder={"Name"}
            />
            <input
              onChange={(e) => {
                if (e.target.value.length > 16) {
                  getError(1, true);
                } else {
                  setLastNameValue(e.target.value);
                  setLastNameCharLeft(16 - e.target.value.length);
                  getError(1, false);
                }
              }}
              value={lastNmaeValue}
              className={errors[1] ? "name error" : "name"}
              type={"text"}
              placeholder={"Last Name"}
            />
          </div>
          <span className="name-lastname-err">
            {nameCharacLeft === 0 && <p>Max 16 characters</p>}
            {lastNameCharacLeft === 0 && <p>Max 16 characters</p>}
          </span>
          <input
            onChange={(e) => {
              setEmailValue(e.target.value);
              getError(2, false);
            }}
            className={errors[2] ? "error" : ""}
            value={emailValue}
            type={"email"}
            placeholder={"Email example lastname@gmail.co"}
          />
          <span></span>
          <input
            onChange={(e) => {
              setPasswordValue(e.target.value);
              getError(3, false);
            }}
            className={errors[3] ? "error" : ""}
            value={passwordValue}
            type={"password"}
            placeholder={"password"}
          />
          <span>
            {errors[3] ? "The password must be at least 8 characters" : ""}
          </span>
          <input
            onChange={(e) => {
              setConfirmPasswordValue(e.target.value);
              getError(4, false);
            }}
            className={errors[4] ? "error" : ""}
            value={confirmPasswordValue}
            type={"password"}
            placeholder={"Confirm password"}
          />
          <span>{errors[4] ? "The password is not the same" : ""}</span>
          <button type="submit">Sign Up</button>
          <button className="start-as-gust" type="Button">
            Start as gust
          </button>
          <a>
            Already have an account?
            <span
              onClick={() => {
                navigate(ROUTES_NAMES.login);
              }}
            >
              Log in
            </span>
          </a>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
