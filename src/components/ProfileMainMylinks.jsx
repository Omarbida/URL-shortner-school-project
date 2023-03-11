import useAuth from "../hooks/useAuthContext";

function ProfileMainMyLinks() {
  const authContext = useAuth();
  return (
    <div className="main-profile">
      <div className="mylinks card">
        <h1>My links</h1>
        <div className="links-info card">
          <h2>My link name</h2>
          <p className="lable">Original URL:</p>
          <a className="link">
            original/link/&=454645646464464684786464618648563416841641644135184864154634634163464841351465444.link
          </a>
          <p className="lable">Short URL:</p>
          <a className="link">short.link</a>
        </div>
      </div>
    </div>
  );
}
export default ProfileMainMyLinks;
