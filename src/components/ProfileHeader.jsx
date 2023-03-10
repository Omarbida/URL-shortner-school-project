import { useState } from "react";
import { Bell, Home, Link, Menu, MessageCircle, Search } from "react-feather";
import useAuth from "../hooks/useAuthContext";

function ProfileHeader() {
  const authContext = useAuth();
  const [btnSelected, setBtnSelected] = useState(0);
  const selectBtn = (i) => {
    setBtnSelected(i);
  };
  return (
    <div className="header-profile">
      <div className="menu-profile">
        <button
          className={btnSelected === 0 ? "selected" : ""}
          onClick={() => {
            selectBtn(0);
          }}
        >
          <Home size={20} />
          Home
        </button>
        <button
          className={btnSelected === 1 ? "selected" : ""}
          onClick={() => {
            selectBtn(1);
          }}
        >
          <Link size={20} />
          My links
        </button>
        <div className="user-profile">
          <div className="profile-avatar">
            <img src={authContext.user?.profileimg} />
          </div>
          <span>
            <p>{authContext.user?.name}</p>
            <p>{authContext.user?.lastName}</p>
          </span>
        </div>
        <button>
          <Menu size={40} />
        </button>
      </div>
    </div>
  );
}
export default ProfileHeader;
