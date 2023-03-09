import { Navigate } from "react-router";
import { ROUTES_NAMES } from "../constants";
import useAuth from "../hooks/useAuthContext";

const AuthGuard = ({ children }) => {
  const authContext = useAuth();
  if (authContext.user) return <>{children}</>;
  else return <Navigate to={ROUTES_NAMES.login} />;
};
export default AuthGuard;
