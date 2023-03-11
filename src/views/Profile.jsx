import { useState } from "react";
import ProfileFooter from "../components/ProfileFooter";
import ProfileHeader from "../components/ProfileHeader";
import ProfileMainHome from "../components/ProfileMainHome";
import ProfileMainMyLinks from "../components/ProfileMainMylinks";
import "./Profile.css";
const Profile = () => {
  const [selectedView, setSelectedView] = useState(1);
  const changeViewHandler = (page) => {
    setSelectedView(page);
  };
  return (
    <div className="container-profile">
      <ProfileHeader onChangeView={changeViewHandler} />
      {selectedView === 1 && <ProfileMainHome />}
      {selectedView === 2 && <ProfileMainMyLinks />}
      <ProfileFooter />
    </div>
  );
};

export default Profile;
