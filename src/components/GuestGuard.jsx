import { Navigate } from "react-router";
import { ROUTES_NAMES } from "../constants";
import useAuth from "../hooks/useAuthContext";

const GuestGuard = ({ children }) => {
  const authContext = useAuth();
  if (!authContext.user) return <>{children}</>;
  else return <Navigate to={ROUTES_NAMES.profile} />;
};
export default GuestGuard;
