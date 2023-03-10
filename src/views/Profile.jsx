import ProfileFooter from "../components/ProfileFooter";
import ProfileHeader from "../components/ProfileHeader";
import ProfileMain from "../components/ProfileMain";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="container-profile">
      <ProfileHeader />
      <ProfileMain />
      <ProfileFooter />
    </div>
  );
};

export default Profile;
