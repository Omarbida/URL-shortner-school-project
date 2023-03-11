import LogInForm from "./views/LogInForm";
import SignUpForm from "./views/SignUpForm";
import "./App.css";
import { ROUTES_NAMES } from "./constants";
import { Navigate, Route, Routes } from "react-router";
import Profile from "./views/Profile";
import { AuthProvider } from "./contexts/authContext";
import AuthGuard from "./components/Guards/AuthGuard";
import GuestGuard from "./components/Guards/GuestGuard";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route
            path={ROUTES_NAMES.home}
            element={<Navigate to={ROUTES_NAMES.login} />}
          />
          <Route
            path={ROUTES_NAMES.login}
            element={
              <GuestGuard>
                <LogInForm />
              </GuestGuard>
            }
          />
          <Route
            path={ROUTES_NAMES.signup}
            element={
              <GuestGuard>
                <SignUpForm />
              </GuestGuard>
            }
          />
          <Route
            path={ROUTES_NAMES.profile}
            element={
              <AuthGuard>
                <Profile />
              </AuthGuard>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
