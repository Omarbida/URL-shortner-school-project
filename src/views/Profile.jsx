import useAuth from "../hooks/useAuthContext";

const Profile = () => {
  const authContext = useAuth();
  return (
    <div>
      <h1>{authContext.user?.name}</h1>
      <h1>{authContext.user?.lastName}</h1>
      <h1>{authContext.user?.email}</h1>
      <h1>{authContext.user?.password}</h1>
    </div>
  );
};

export default Profile;
