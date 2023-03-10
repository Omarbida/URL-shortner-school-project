import { useState } from "react";
import { Bell, Home, Menu, MessageCircle, Search } from "react-feather";
import useAuth from "../hooks/useAuthContext";
import "./Profile.css";
const Profile = () => {
  const authContext = useAuth();
  const [btnSelected, setBtnSelected] = useState(0);
  const selectBtn = (i) => {
    setBtnSelected(i);
  };
  return (
    <div className="container-profile">
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
            <Bell size={20} />
            Notifications
          </button>
          <button
            className={btnSelected === 2 ? "selected" : ""}
            onClick={() => {
              selectBtn(2);
            }}
          >
            <MessageCircle size={20} />
            Chat
          </button>
          <div className="search-form-profile">
            <input
              placeholder="Search..."
              className="search-profile"
              type={"search"}
            />
            <button className="search-btn-profile">
              <Search size={30} />
            </button>
          </div>
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

      <div className="main-profile"></div>
    </div>
  );
};

export default Profile;
