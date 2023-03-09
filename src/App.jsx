import { useState } from "react";
import LogInForm from "./pages/LogInForm";
import SignUpForm from "./pages/SignUpForm";
import "./App.css";
import { ROUTES_NAMES } from "./constants";
import { Navigate, Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={ROUTES_NAMES.home}
          element={<Navigate to={ROUTES_NAMES.login} />}
        />
        <Route path={ROUTES_NAMES.login} element={<LogInForm />} />
        <Route path={ROUTES_NAMES.signup} element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
